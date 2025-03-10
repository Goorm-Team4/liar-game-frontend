import { Container, InputContainer } from './styles';
import ChatBubble from '@/components/chat/ChatBubble';
import GameProfile from '@/components/game/GameProfile';
import ChatForm from '@/components/chat/ChatForm';
import char1 from '@/assets/images/char1.png';

const GuessAnswer = () => {
  const myInfo = { id: 1, name: '산책하는 노루', avatar: char1 };

  return (
    <Container>
      <ChatBubble message="구름과자" size="large" />
      <GameProfile
        imgSrc={myInfo.avatar}
        size="extraLarge"
        nickname={myInfo.name}
      />
      <InputContainer>
        <ChatForm isMyTurn={true} />
      </InputContainer>
    </Container>
  );
};

export default GuessAnswer;
