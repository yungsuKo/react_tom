import axios from 'axios';
import { useState } from 'react';
import History from '../components/History';
const baseUrl = 'http://localhost:4000';

const Seller = () => {
  let [revenue, setRevenue] = useState(0);
  const [url, setUrl] = useState('');
  const [historys, setHistorys] = useState([]);

  const children = [];
  const getRevenue = async () => {
    const res = await axios.get(`${baseUrl}/store`, {
      params: {
        url,
      },
    });
    revenue = Math.floor((res.data / 7) * 30)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setRevenue(revenue);

    setHistorys([...historys, { url, revenue }]);
    console.log(historys);
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={getRevenue}>입력</button>

      <div>{revenue}</div>
      <History historys={historys} />
    </div>
  );
};

export default Seller;
