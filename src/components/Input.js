import { MainButton } from '../styled_components/Button';
import { MainInput } from '../styled_components/MainInput';

const Input = (props) => {
  const { onChange, children, placeholder, type } = props;
  return (
    <MainInput onChange={onChange} placeholder={placeholder} type={type}>
      {props.children}
    </MainInput>
  );
};

export default Input;
