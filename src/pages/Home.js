import Button from '../components/Button';
import useModals from '../context/useModal';
import Modals from '../components/Modals';
import Modal from '../components/Modal';
import Layout from '../layouts/Layout';

const MyModal = ({ text, onClick }) => {
  return <Modal text={text} onClick={onClick} />;
};

const Home = () => {
  const { openModal, closeModal } = useModals();
  const handleClick = () => {
    console.log('ddd');
    openModal(MyModal, {
      text: '안녕하세요 모달입니다.',
      onClick: () => {
        closeModal(MyModal);
      },
    });
  };

  return (
    <Layout>
      <div className="text-3xl">Hello this is home</div>

      <Button onClick={handleClick}>모달</Button>
      <Modals />
      <div style={{ height: '1500px' }}>dd</div>
    </Layout>
  );
};

export default Home;
