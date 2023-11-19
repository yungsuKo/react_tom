const Messages = ({ histories }) => {
  return (
    <ul>
      {histories.map((history, idx) => (
        <li key={idx}>{history}</li>
      ))}
    </ul>
  );
};

export default Messages;
