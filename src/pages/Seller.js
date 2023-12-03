import axios from 'axios';
import { useEffect, useState } from 'react';
import History from '../components/History';
import Layout from '../layouts/Layout';
import Button from '../components/Button';
import Input from '../components/Input';
const baseUrl = 'http://localhost:4000';

const Seller = () => {
  let [revenue, setRevenue] = useState(0);
  const [initData, setInitData] = useState([]);
  const [url, setUrl] = useState('');
  const [historys, setHistorys] = useState([]);

  useEffect(() => {
    const getInitData = async () => {
      const res = await axios.get(`${baseUrl}/store`);
      console.log(res);
      setInitData(res.data);
    };
    getInitData();
  }, []);

  const children = [];
  const getRevenue = async () => {
    const res = await axios.post(`${baseUrl}/store`, {
      url,
    });
    const { channelName, storeId, storeRevenue7d, create_dt } = res.data;
    revenue = Math.floor((storeRevenue7d / 7) * 30)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setRevenue(revenue);

    setHistorys([
      ...historys,
      { url: `https://smartstore.naver.com/${storeId}`, revenue },
    ]);
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
