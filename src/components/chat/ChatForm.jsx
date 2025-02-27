import React, { useState } from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import vars from '../../styles/vars';

function ChatForm({ isMyTurn, onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message); // Chat.jsx 로 메세지 전달
      setMessage('');
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
    >
      <ChatInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onSend={handleSendMessage}
        disabled={!isMyTurn}
        placeholder={
          isMyTurn ? '메세지를 입력해 주세요.' : '다른 사람의 턴입니다.'
        }
      />
      <Button type="submit" disabled={!isMyTurn || message.trim() === ''}>
        전송
      </Button>
    </Form>
  );
}

export default ChatForm;

const Form = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: ${vars.fontSize['0.875x']};
  background-color: ${({ disabled }) =>
    disabled ? vars.colors.gray[300] : vars.colors.blue[500]};
  color: white;
  border: none;
  border-radius: ${vars.borderRadius['5x']};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${vars.colors.blue[400]};
  }
`;
