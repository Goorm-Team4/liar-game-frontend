import React, { useState } from 'react';
import styled from 'styled-components';
import vars from '../../styles/vars';

function ChatInput({ value, onChange, onSend, placeholder, disabled }) {
  const [isComposing, setIsComposing] = useState(false); // 한글 입력 처리

  const handleKeyPress = (event) => {
    if (
      event.key === 'Enter' &&
      !isComposing &&
      !disabled &&
      value.trim() !== ''
    ) {
      onSend();
    }
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      onCompositionStart={() => setIsComposing(true)}
      onCompositionEnd={() => setIsComposing(false)}
      onKeyDown={handleKeyPress}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
}

export default ChatInput;

const Input = styled.input`
  flex: 1;
  padding: 12px 22px;
  border: none;
  border-radius: ${vars.borderRadius['5x']};
  font-size: ${vars.fontSize['1x']};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  background-color: ${vars.colors.gray[200]};
  outline: none;

  &::placeholder {
    color: ${({ disabled }) =>
      disabled ? vars.colors.gray[500] : vars.colors.blue[500]};
  }
`;
