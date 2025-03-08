import ProfileImg from '../../components/shared/profile/ProfileImg';
import Nickname from '../shared/profile/Nickname';
import { GameProfileContainer } from './styles';
import { GAME_PROFILE_SIZE, PROFILE_BOX_SIZE } from '../../constants/game';

const GameProfile = ({ imgSrc, size, nickname, mg }) => {
  return (
    <GameProfileContainer size={PROFILE_BOX_SIZE[size]} mg={mg}>
      <ProfileImg size={GAME_PROFILE_SIZE[size]} src={imgSrc} />
      <Nickname
        size={size}
        color="black"
        nickname={nickname}
        fontWeight="semibold"
      />
    </GameProfileContainer>
  );
};

export default GameProfile;
