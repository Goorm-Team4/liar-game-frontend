import { ButtonBox } from './styles';

function Button({ size, color, children, onClick }) {
  return (
    <ButtonBox size={size} color={color} onClick={onClick}>
      {children}
    </ButtonBox>
  );
}

export default Button;
