import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Messages from '../components/Messages';
import Rooms from '../components/Rooms';

const ENDPOINT = 'http://localhost:4000/coin';
const socket = io(ENDPOINT);

const Chat = () => {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [nickname, setNickname] = useState('');
  const [roomName, setRoomName] = useState('');
  const [room, setRoom] = useState('');
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    socket.on(room, (args) => {
      setHistory([...history, args]);
      setMessage('');
    });
    console.log(room);
    socket.on('comeOn' + room, (comeOn) => {
      setHistory([...history, comeOn]);
    });

    return () => {
      socket.emit('disconnected');
      socket.off();
    };
  }, [history, room]);

  useEffect(() => {
    setRoomList([...roomList, roomName]);
  }, []);

  const onChat = (e) => {
    setMessage(e.target.value);
  };
  const onNickname = (e) => {
    setNickname(e.target.value);
  };
  const onRoom = (e) => {
    setRoom(e.target.value);
  };
  const onSend = (e) => {
    socket.emit('send', { room, nickname, message });
  };
  const onJoin = () => {
    socket.emit('JoinRoom', { room, nickname });
  };
  const onRoomName = (e) => {
    setRoomName(e.target.value);
  };
  const createRoom = () => {
    setRoomList([...roomList, roomName]);
  };

  return (
    <>
      <div>
        <input
          placeholder="생성할 방 이름을 입력하세요"
          onChange={onRoomName}
        />
        <button onClick={createRoom}>createRoom</button>
      </div>
      <ul>
        <Rooms rooms={roomList} />
      </ul>
      <input placeholder="닉네임을 입력하세요" onChange={onNickname} />
      <input placeholder="room 번호를 입력하세요" onChange={onRoom} />
      <button onClick={onJoin}>joinroom</button>
      <ul className="chat-history">
        <Messages histories={history} />
      </ul>
      <input type="text" onChange={onChat} value={message} />
      <input type="submit" onClick={onSend} />
    </>
  );
};
export default Chat;
