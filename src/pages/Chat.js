import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Messages from '../components/Messages';

const ENDPOINT = 'http://localhost:4000/coin';
const socket = io(ENDPOINT);

const Chat = () => {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    socket.on('ServerToClient', (args) => {
      console.log('args', Object.values(args)[0]);
      setHistory([...history, Object.values(args)[0]]);
      history.map((chat, idx) => console.log('chat', idx, chat));
      setMessage('');
    });
    return () => {
      socket.emit('disconnected');
      socket.off();
    };
  }, [history]);

  const onChat = (e) => {
    setMessage(e.target.value);
  };
  const onSend = (e) => {
    socket.emit('ClientToServer', { message });
  };

  return (
    <>
      <ul className="chat-history">
        <Messages histories={history} />
      </ul>
      <input type="text" onChange={onChat} value={message} />
      <input type="submit" onClick={onSend} />
    </>
  );
};
export default Chat;
