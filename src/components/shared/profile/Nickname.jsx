import { NicknameBox } from './styles';

const Nickname = ({ nickname, size, color, fontWeight }) => {
  return (
    <NicknameBox size={size} color={color} fontWeight={fontWeight}>
      {nickname}
    </NicknameBox>
  );
};

Nickname.defaultProps = {
  size: 'default',
  color: 'black',
  fontWeight: 'medium',
};

export default Nickname;
