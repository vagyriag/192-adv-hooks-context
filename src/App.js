import React from 'react';
import { NewMessageBar } from './NewMessageBar';
import { MessagesContext } from './MessagesContext';
import { useLocalStorage } from './useLocalStorage';
import { WSComp } from './WSComp';

function App() {

  const [ messages, setMessages ] = useLocalStorage('messages', []);

  const handleSend = (newMessage) => {
    setMessages([ ...messages, { user: 'Gavi', message: newMessage } ]);
  }

  return (
    <div className="App">
      <MessagesContext.Provider value={{ messages, setMessages }}>
        <ul>
          {messages.map(({ user, message }, index) => {
            return <li key={user + message + index}><b>{user}</b> - {message}</li>;
          })}
        </ul>

        <NewMessageBar  />

        <WSComp />
      </MessagesContext.Provider>
    </div>
  );
}

export default App;
