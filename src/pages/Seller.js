import axios from 'axios';
import { useState } from 'react';
import History from '../components/History';
import Layout from '../layouts/Layout';
import Button from '../components/Button';
import Input from '../components/Input';
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
    console.log(url);
    setUrl(e.target.value);
  };

  return (
    <Layout>
      <Input
        type="text"
        onChange={handleChange}
        placeholder="스토어 url을 입력하세요!"
      />
      <Button onClick={getRevenue}>입력</Button>

      <div>{revenue}</div>
      <History historys={historys} />
    </Layout>
  );
};

export default Seller;
