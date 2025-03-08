import { Container, ChatContainer, InputContainer } from './styles';
import Chat from '../../../components/chat/index';

import char1 from '../../../assets/images/char1.png';
import char2 from '../../../assets/images/char2.png';
import char3 from '../../../assets/images/char3.png';
import char4 from '../../../assets/images/char4.png';
import char5 from '../../../assets/images/char5.png';
import char6 from '../../../assets/images/char6.png';
import ChatForm from '../../../components/chat/ChatForm';

const Argument = () => {
  // api 로 실시간 채팅 정보 받아오기
  const myInfo = { id: 1, name: '산책하는 노루', avatar: char1 };
  const players = [
    { id: 1, name: '산책하는 노루', avatar: char1 },
    { id: 2, name: '흥청망청 코끼리', avatar: char2 },
    { id: 3, name: '물먹는 버섯', avatar: char3 },
    { id: 4, name: '노래하는 달팽이', avatar: char4 },
    { id: 5, name: '등반하는 바위', avatar: char5 },
    { id: 6, name: '야자하는 야자나무', avatar: char6 },
  ];

  return (
    <Container>
      <ChatContainer>
        <Chat
          profileImg={char2}
          nickname="코끼리"
          message="저 사람이 마피아예요"
        />
        <Chat myChat={true} message="이거 마피아게임 아닙니다." />
        <Chat profileImg={char2} nickname="코끼리" message="아 라이어" />
      </ChatContainer>
      <InputContainer>
        <ChatForm isMyTurn={true} />
      </InputContainer>
    </Container>
  );
};

export default Argument;
