import { Link } from 'react-router-dom';

const History = (props) => {
  const historys = props.historys;
  const historyItems = historys.map((history) => (
    <tr key={history.url}>
      <td className="border border-black w-64">
        <a href={history.url}>{history.url}</a>
      </td>
      <td className="border border-black w-64">{history.revenue}</td>
    </tr>
  ));
  return (
    <table>
      <tr>
        <td className="border border-black w-64">store url</td>
        <td className="border border-black w-64">month rev</td>
      </tr>
      {historyItems}
    </table>
  );
};

export default History;
