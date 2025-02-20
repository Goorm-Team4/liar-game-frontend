import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Timer from '../../components/Timer';
import ChatInput from '../../components/chat/ChatInput';
import TypingIndicator from '../../components/chat/TypingIndicator';

import char1 from '../assets/images/char1.png';
import char2 from '../assets/images/char2.png';
import char3 from '../assets/images/char3.png';
import char4 from '../assets/images/char4.png';

// 플레이어 더미
const dummyPlayers = [
  { id: 1, name: '산책하는 노루', avatar: char1, message: '' },
  { id: 2, name: '흥청망청 코끼리', avatar: char2, message: '' },
  { id: 3, name: '물먹는 버섯', avatar: char3, message: '' },
  { id: 4, name: '노래하는 달팽이', avatar: char4, message: '' },
];

const TurnPage = () => {
  const navigate = useNavigate();

  const [players, setPlayers] = useState(dummyPlayers);
  const [currentTurn, setCurrentTurn] = useState(0); // 현재 턴
  const [timerPause, setTimerPause] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false); // 채팅 한번만 입력 가능
  const [isTyping, setIsTyping] = useState(false); // 입력 중인지
  const [resetTrigger, setResetTrigger] = useState(0);

  // 랜덤 턴
  const [turnOrder, setTurnOrder] = useState(() => {
    const randomOrder = [...players].sort(() => Math.random() - 0.5);
    return randomOrder;
  });

  const myTurn = true;
  // const myId = 1;
  // const myTurn = turnOrder[currentTurn].id === myId;

  // currentPlayer 업데이트
  useEffect(() => {
    if (turnOrder.length > 0) {
      setCurrentPlayer(
        players.find((player) => player.id === turnOrder[currentTurn]?.id) ||
          null
      );
      console.log('현재 플레이어 정보:', currentPlayer);
    }
  }, [players, currentTurn]);

  // 모든 플레이어 턴 끝나면 다음 페이지 이동
  useEffect(() => {
    if (0 < turnOrder.length && turnOrder.length <= currentTurn) {
      navigate('/vote');
    }
  }, [currentTurn, turnOrder.length, navigate]);

  // 다음 턴 이동
  const nextTurn = () => {
    setTimerPause(false);
    setHasSubmitted(false);
    setCurrentTurn((prev) => (prev !== null ? prev + 1 : 0));
    setResetTrigger((prev) => prev + 1); // 트리거 값 변경하여 타이머 재시작
  };

  // 메세지 전송 & 다음 턴 이동
  const handleSendMessage = (message) => {
    if (!message.trim() || hasSubmitted) return;

    setHasSubmitted(true);
    setTimerPause(true); // 타이머 카운트 정지

    setPlayers((prev) => {
      const updatedPlayer = prev.map((player) =>
        player.id === currentPlayer?.id ? { ...player, message } : player
      );
      setCurrentPlayer(
        updatedPlayer.find((player) => player.id === currentPlayer?.id)
      );
      return updatedPlayer;
    });

    // 메세지 2초 렌더링 후 다음 턴으로 이동
    setTimeout(() => {
      setTimerPause(false);
      nextTurn();
    }, 2000);
  };

  // 입력 감지
  const handleTyping = (text) => {
    if (myTurn) {
      setIsTyping(text.length > 0);
    }
  };

  return (
    <PageContainer>
      <SectionContainer>
        <TeamInfoContainer>
          <TeamName>라이어</TeamName>
          <Keyword>빵</Keyword>
          <Instruction>단어에 대해서 설명해주세요</Instruction>
          <Timer
            initTime={10}
            onTimeUp={nextTurn}
            timerPause={timerPause}
            resetTrigger={resetTrigger}
          />
        </TeamInfoContainer>

        <PlayerContainer>
          {currentPlayer && (
            <Player>
              <Character src={currentPlayer.avatar} alt={currentPlayer.name} />
              <Nickname>{currentPlayer.name}</Nickname>
              <Chat>
                {isTyping ? <TypingIndicator /> : currentPlayer?.message}
              </Chat>
            </Player>
          )}
        </PlayerContainer>

        <ChatInput
          onSendMessage={handleSendMessage}
          onTyping={handleTyping}
          placeholder={
            myTurn ? '메세지를 입력해주세요' : '현재 순서가 아닙니다'
          }
          disabled={!myTurn || hasSubmitted}
        />
      </SectionContainer>
    </PageContainer>
  );
};

export default TurnPage;

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

const TeamInfoContainer = styled.div`
  flex: 0;
  text-align: center;
  font-weight: 700;
`;

const TeamName = styled.h1`
  font-size: 3vh;
  color: #f80808;
  margin-bottom: 2.5vh;
`;

const Keyword = styled.p`
  font-size: 3vh;
  color: #000000;
`;

const Instruction = styled.p`
  margin-top: 2.5vh;
  font-size: 3vh;
  font-weight: 700;
  line-height: 4vh;
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
    border-color: #f1f1f1 transparent transparent transparent; /* 꼬리 색상 */
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
