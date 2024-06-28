type ButtonProps = {
  onClick: () => void;
};
const Button = ({ onClick, ...rest }: ButtonProps) => {
  // state

  // comportements

  //render
  return (
    <button onClick={onClick} {...rest}>
      Click Me !
    </button>
  );
};

export default Button;
