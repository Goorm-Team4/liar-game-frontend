import React, { useState } from 'react';
import styled from 'styled-components';
import ChatBubble from '../../components/chat/ChatBubble/index';
import ChatInput from '../../components/chat/ChatInput';
import ChatForm from '../../components/chat/ChatForm';

function test() {
  const [message, setMessage] = useState('');
  const [lastSentMessage, setLastSentMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = (text) => {
    console.log('전송된 메시지:', text);
    setLastSentMessage(text);
    setMessage('');
  };

  return (
    <>
      <TestContainer>
        <h1>ChatBubble 테스트</h1>
        <ChatBubble size="medium" myChat message="안녕하세요!" />
        <ChatBubble size="medium" myChat={false} message="반갑습니다!" />
      </TestContainer>

      <TestContainer>
        <h1>ChatInput 테스트</h1>
        <ChatInput
          value={message}
          onChange={handleInputChange}
          onSend={handleSend}
          placeholder="메시지를 입력하세요."
          disabled={false}
        />
        {lastSentMessage && (
          <MessageDisplay>마지막 전송 메시지: {lastSentMessage}</MessageDisplay>
        )}
      </TestContainer>

      <TestContainer>
        <ChatForm isMyTurn onSendMessage={handleSend} />
      </TestContainer>
    </>
  );
}

export default test;

const TestContainer = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  padding: 40px;
`;

const MessageDisplay = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  text-align: center;
`;
