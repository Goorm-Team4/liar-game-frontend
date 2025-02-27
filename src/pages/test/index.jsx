import React from 'react';
import styled from 'styled-components';
import ChatBubble from '../../components/chat/ChatBubble/index';

function test() {
  return (
    <TestContainer>
      <h1>ChatBubble 테스트</h1>
      <ChatBubble size="medium" myChat message="안녕하세요!" />
      <ChatBubble size="medium" myChat={false} message="반갑습니다!" />
    </TestContainer>
  );
}

export default test;

const TestContainer = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;
