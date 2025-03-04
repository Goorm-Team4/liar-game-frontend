import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../shared/profile/ProfileImg';
import Nickname from '../shared/profile/Nickname';
import ChatBubble from './ChatBubble';

function Chat({ profileImg, nickname, message }) {
  return (
    <ChatContainer>
      <ProfileImg size="10vh" src={profileImg} />

      <ChatContent>
        <Nickname
          nickname={nickname}
          size="medium"
          color="black"
          fontWeight="bold"
        />
        <ChatBubble size="medium" myChat={false} message={message} />
      </ChatContent>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3vh;
`;

const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
