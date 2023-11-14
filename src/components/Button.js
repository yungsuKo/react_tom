const Button = (props) => {
  const { onClick, children } = props;
  return (
    <div>
      <button onClick={onClick}>{props.children}</button>
    </div>
  );
};

export default Button;
