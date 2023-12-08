import Button from './Button';
import './Modal.css';

const Modal = ({ text, onClick }) => {
  return (
    <>
      <div className="modal_backgroud" onClick={onClick}></div>
      <div className="modal_container">
        <div className="modal_header"></div>
        <div className="modal_content">{text}</div>
        <div className="modal_footer">
          <Button onClick={onClick}>dd</Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
