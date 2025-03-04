import ProfileImg from '../../components/shared/profile/ProfileImg';
import Nickname from '../shared/profile/Nickname';
import { GameProfileContainer } from './styles';
import { GAME_PROFILE_SIZE } from './constants';

const GameProfile = ({ imgSrc, size, nickname }) => {
  return (
    <GameProfileContainer>
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
