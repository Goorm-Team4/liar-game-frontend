import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Timer from '../../components/Timer';
import ChatInput from '../../components/chat/ChatInput';

import char1 from '../assets/images/char1.png';

const ResistPage = () => {
  const navigate = useNavigate();
  const [liarInput, setLiarInput] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false); // 채팅 한번만 입력으로 제한
  const isLiar = true; // 더미

  const handleSendMessage = (message) => {
    if (isLiar && !hasSubmitted) {
      setLiarInput(message);
      setHasSubmitted(true);
    }
  };

  return (
    <PageContainer>
      <SectionContainer>
        <HeaderContainer>
          <LiarAnnouncement>닉네임은 라이어였습니다!</LiarAnnouncement>
          <Title>최후의 저항</Title>
          <Timer initTime={10} onTimeUp={() => navigate('/result')} />
        </HeaderContainer>

        <PlayerContainer>
          <Player>
            <Character src={char1} alt="Liar" />
            <Nickname>라이어</Nickname>
            <Chat>{liarInput}</Chat>
          </Player>
        </PlayerContainer>

        <ChatInput
          onSendMessage={handleSendMessage}
          placeholder={
            isLiar ? '정답을 입력해주세요' : '라이어만 입력 가능합니다'
          }
          disabled={!isLiar || hasSubmitted}
        />
      </SectionContainer>
    </PageContainer>
  );
};

export default ResistPage;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 4vh;
`;

const HeaderContainer = styled.div`
  flex: 0;
  font-weight: 700;
  text-align: center;
`;

const LiarAnnouncement = styled.h1`
  font-size: 3vh;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

const Title = styled.h1`
  font-size: 3vh;
  color: #ff0000;
`;

const PlayerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Player = styled.div`
  position: relative;
  top: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Chat = styled.div`
  position: absolute;
  bottom: 27vh;
  left: 50%;
  transform: translateX(-50%);
  min-width: 40vh;
  height: 26vh;
  align-content: center;
  padding: 2vh;
  background-color: #f1f1f1;
  font-size: 2.5vh;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    bottom: -30px; /* 말풍선 꼬리 높이 */
    left: 75%;
    transform: translateX(-50%);
    border-width: 15px;
    border-style: solid;
    border-color: #f1f1f1 transparent transparent transparent;
  }
`;

const Character = styled.img`
  width: 17vh;
  height: 17vh;
`;

const Nickname = styled.p`
  font-size: 2.5vh;
  font-weight: 600;
  margin-top: 2.5vh;
`;

// const ChatInputContainer = styled.div`
//     flex: 0;
//     display: flex;
//     gap: 1vh;
// `;

// const ChatInput = styled.input`
//     flex: 1;
//     padding: 8px 12px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     font-size: 2vh;
//     cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

//     &::placeholder {
//         color: ${({ disabled }) => (disabled ? "#aaa" : "#888")};
//     }
// `;

// const SendButton = styled.button`
//     padding: 8px 16px;
//     border: none;
//     border-radius: 4px;
//     font-size: 2vh;
//     background-color: ${({ disabled }) => (disabled ? "#ddd" : "#3498db")};
//     color: ${({ disabled }) => (disabled ? "#aaa" : "#ffffff")};
//     cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

//     &:hover {
//         background-color: ${({ disabled }) => (disabled ? "#ddd" : "#2980b9")};
//     }
// `;
