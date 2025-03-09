import { VotedPlayerContainer } from './styles';
import ProfileImg from '../../components/shared/profile/ProfileImg';
import { GAME_PROFILE_SIZE } from '../../constants/game';

const VotedPlayer = ({ size, votes }) => {
  return (
    <VotedPlayerContainer>
      {votes.map((vote, index) => (
        <ProfileImg key={index} size={GAME_PROFILE_SIZE[size]} src={vote} />
      ))}
    </VotedPlayerContainer>
  );
};

export default VotedPlayer;
