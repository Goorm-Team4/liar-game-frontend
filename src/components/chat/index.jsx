import { ChatContainer, ChatContent } from './styles';
import ProfileImg from '../shared/profile/ProfileImg';
import Nickname from '../shared/profile/Nickname';
import ChatBubble from './ChatBubble';

function Chat({ profileImg, nickname, message, myChat }) {
  return (
    <ChatContainer myChat={myChat}>
      <ProfileImg size="10vh" src={profileImg} hidden={myChat} />

      <ChatContent>
        <Nickname
          nickname={nickname}
          size="medium"
          color="black"
          fontWeight="semibold"
        />
        <ChatBubble size="medium" myChat={myChat} message={message} />
      </ChatContent>
    </ChatContainer>
  );
}

export default Chat;
