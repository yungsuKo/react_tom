import { MainButton } from '../styled_components/Button';

const Button = (props) => {
  const { onClick, children } = props;
  return (
    <MainButton className="bg-gray-200" type="button" onClick={onClick}>
      {props.children}
    </MainButton>
  );
};

export default Button;
