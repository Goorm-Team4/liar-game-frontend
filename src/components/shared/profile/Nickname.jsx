import PropTypes from 'prop-types';
import { NicknameBox } from './styles';

const Nickname = ({ nickname, size, color, fontWeight }) => {
  return (
    <NicknameBox size={size} color={color} fontWeight={fontWeight}>
      {nickname}
    </NicknameBox>
  );
};

export default Nickname;

Nickname.propTypes = {
  nickname: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small', 'default']),
  color: PropTypes.string,
  fontWeight: PropTypes.string,
};

Nickname.defaultProps = {
  size: 'default',
  color: 'black',
  fontWeight: 'medium',
};
