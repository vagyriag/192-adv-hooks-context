import React from 'react';
import { MessagesContext } from './MessagesContext';

export const NewMessageBar = (props) => {
  const context = React.useContext(MessagesContext);

  const [ newMessage, setNewMessage ] = React.useState('');
  const handleChange = (ev) => {
    setNewMessage(ev.target.value);
  }

  const handleSend = () => {
    //props.handleSend(newMessage);
    context.handleSend({ user: 'Gavi', message: newMessage });
    setNewMessage('');
  }

  return <div>
    <input value={newMessage} onChange={handleChange} />
    <button onClick={handleSend}>Enviar</button>
  </div>;
}