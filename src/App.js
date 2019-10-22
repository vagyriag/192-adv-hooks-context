import React from 'react';
import { NewMessageBar } from './NewMessageBar';
import { MessagesContext } from './MessagesContext';
import { useLocalStorage } from './useLocalStorage';
import io from 'socket.io-client';

function App() {

  const [ messages, setMessages ] = useLocalStorage('messages', []);

  const socket = React.useRef();
  React.useEffect(() => {
    socket.current = io('http://localhost:3006');

    socket.current.on('update messages', function(messages){
      setMessages(messages);
    });
  }, []);

  const handleSend = (newMessage) => {
    socket.current.emit('new message', newMessage);
  }

  return (
    <div className="App">
      <MessagesContext.Provider value={{ handleSend }}>
        <ul>
          {messages.map(({ user, message }, index) => {
            return <li key={user + message + index}><b>{user}</b> - {message}</li>;
          })}
        </ul>

        <NewMessageBar  />
      </MessagesContext.Provider>
    </div>
  );
}

export default App;
