import { VotedPlayerContainer } from './styles';
import ProfileImg from '../../components/shared/profile/ProfileImg';
import { GAME_PROFILE_SIZE } from './constants';

const VotedPlayer = ({ size, targetId }) => {
  const { votes } = useWebSocket(); // useWebsocket 연결

  const filterVotes = votes.filter((vote) => vote.targetId === targetId);

  return (
    <VotedPlayerContainer>
      {filterVotes.map((vote, index) => (
        <ProfileImg
          key={index}
          size={GAME_PROFILE_SIZE[size]}
          src={vote.voterId}
        />
      ))}
    </VotedPlayerContainer>
  );
};

export default VotedPlayer;
