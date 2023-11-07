const History = (props) => {
  const historys = props.historys;
  const historyItems = historys.map((history) => (
    <tr>
      <td>{history.url}</td>
      <td>{history.revenue}</td>
    </tr>
  ));
  return <table>{historyItems}</table>;
};

export default History;
