import Button from '../components/Button';
import './Home.css';

import useModals from '../context/useModal';
import Modals from '../components/Modals';
import Modal from '../components/Modal';

const MyModal = ({ text, onClick }) => {
  return <Modal text={text} onClick={onClick} />;
};

const Home = () => {
  // let [isOpen, setOpen] = useState(false);
  // const modalControl = () => {
  //   console.log(isOpen);
  //   setOpen(isOpen ? false : true);
  // };

  // const modalConfirm = () => {
  //   setOpen(isOpen ? false : true);
  // };

  // const modalCancel = () => {
  //   setOpen(isOpen ? false : true);
  // };

  const { openModal, closeModal } = useModals();
  const handleClick = () => {
    console.log('ddd');
    openModal(MyModal, {
      text: '안녕하세요 모달입니다.',
      onClick: () => {
        console.log('onsubmit clicked');
        closeModal(MyModal);
      },
      // onCancel: () => {
      //   console.log('onDDD clicked');
      //   closeModal(MyModal);
      // },
    });
  };
  return (
    <div className="main_container">
      This is Home
      <Button onClick={handleClick}>모달</Button>
      <Modals />
    </div>
  );
};

export default Home;
