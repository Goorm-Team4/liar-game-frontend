import styled, { keyframes } from 'styled-components';

const TypingIndicator = () => {
  return (
    <>
      <TypingContainer>
        <Dot />
        <Dot />
        <Dot />
      </TypingContainer>
    </>
  );
};

export default TypingIndicator;

const TypingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.span`
  width: 1vh;
  height: 1vh;
  margin: 0 2px;
  background-color: gray;
  border-radius: 50%;
  animation: ${typingAnimation} 1.5s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
