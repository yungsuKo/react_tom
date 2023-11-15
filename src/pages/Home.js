import Button from '../components/Button';
import './Home.css';

import useModals from '../context/useModal';
import Modals from '../components/Modals';
import ReactModal from 'react-modal';

const MyModal = ({ isOpen, description, onConfirm, onCancel }) => {
  return (
    <ReactModal isOpen={isOpen}>
      <h1>모달입니다.</h1>
      <p>{description}</p>
      <div>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel}>취소</button>
      </div>
    </ReactModal>
  );
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
      isOpen: true,
      description: '안녕하세요 모달입니다.',
      onConfirm: () => {
        console.log('onsubmit clicked');
        closeModal(MyModal);
      },
      onCancel: () => {
        console.log('onDDD clicked');
        closeModal(MyModal);
      },
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
