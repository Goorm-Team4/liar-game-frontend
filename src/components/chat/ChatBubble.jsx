import { BubbleContainer, ChatLarge, ChatMedium, Message } from './styles';

const ChatBubble = ({ size, myChat, message }) => {
  return (
    <BubbleContainer myChat={myChat}>
      {size === 'large' ? (
        <ChatLarge>{message}</ChatLarge>
      ) : (
        <ChatMedium myChat={myChat}>
          <Message myChat={myChat}>{message}</Message>
        </ChatMedium>
      )}
    </BubbleContainer>
  );
};

export default ChatBubble;
