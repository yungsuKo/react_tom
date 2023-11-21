const Rooms = ({ rooms }) => {
  return (
    <ul>
      {rooms.map((room, idx) => (
        <button key={idx}>{room}</button>
      ))}
    </ul>
  );
};

export default Rooms;
