import GuessContainer from './styles';
import GameProfile from './GameProfile';

const GuessBox = () => {
  const { players } = useWebSocket();
  // socket 연결 후 수정

  return (
    <GuessContainer>
      <GameProfile />
      <VotedPlayer size="small" targetId={option.targetId} />
    </GuessContainer>
  );
};

export default GuessBox;
