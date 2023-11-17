import { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');

  const onChat = (e) => {
    console.log(e.target.value);
    setMessage(e.target.value);
  };
  const onSend = (e) => {
    console.log(`${message} send`);
    setMessage('');
  };

  return (
    <>
      <div></div>
      <input type="text" onChange={onChat} value={message} />
      <input type="submit" onClick={onSend} />
    </>
  );
};
export default Chat;
