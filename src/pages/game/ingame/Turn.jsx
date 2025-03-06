import { useState, useEffect } from 'react';
import { Container } from './styles';
import ChatBubble from '../../../components/chat/ChatBubble';
import GameProfile from '../../../components/game/GameProfile';
import ChatForm from '../../../components/chat/ChatForm';
import { useStepStore } from '../../../store/step';

import char1 from '../../../assets/images/char1.png';
import char2 from '../../../assets/images/char2.png';
import char3 from '../../../assets/images/char3.png';
import char4 from '../../../assets/images/char4.png';

const dummyPlayers = [
  { id: 1, name: '산책하는 노루', avatar: char1, message: '' },
  { id: 2, name: '흥청망청 코끼리', avatar: char2, message: '' },
  { id: 3, name: '물먹는 버섯', avatar: char3, message: '' },
  { id: 4, name: '노래하는 달팽이', avatar: char4, message: '' },
];

const Turn = () => {
  const { nextStep } = useStepStore((state) => state.nextStep); // 전역 상태에서 nextStep 가져오기
  const [players, setPlayers] = useState(dummyPlayers);
  const [currentTurn, setCurrentTurn] = useState(0); // 현재 턴
  const [timerPause, setTimerPause] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false); // 채팅 한번만 입력 가능
  const [lastMessage, setLastMessage] = useState(''); // 마지막 메시지를 저장하기 위한 상태

  // 랜덤 턴
  const [turnOrder, setTurnOrder] = useState(() => {
    return [...players].sort(() => Math.random() - 0.5);
  });

  // currentPlayer 업데이트
  useEffect(() => {
    if (turnOrder.length > 0) {
      setCurrentPlayer(
        players.find((player) => player.id === turnOrder[currentTurn]?.id) ||
          null
      );
    }
  }, [players, currentTurn]);

  // 모든 플레이어 턴 끝나면 다음 페이지 이동
  useEffect(() => {
    if (currentTurn >= players.length) {
      nextStep(); // 다음 단계로 이동
    }
  }, [currentTurn, players.length, nextStep]);

  // 다음 턴 이동
  const nextTurn = () => {
    setTimerPause(false);
    setHasSubmitted(false);
    setCurrentTurn((prev) => (prev !== null ? prev + 1 : 0));
  };

  // 메세지 전송 & 다음 턴 이동
  const handleSendMessage = (message) => {
    if (!message.trim() || hasSubmitted) return;

    setHasSubmitted(true);
    setTimerPause(true); // 타이머 카운트 정지
    setLastMessage(message); // 마지막 메시지를 상태로 저장

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

  return (
    <Container>
      <ChatBubble size="large" message={lastMessage} />
      {currentPlayer && (
        <GameProfile
          size="large"
          imgSrc={currentPlayer.avatar}
          nickname={currentPlayer.name}
        />
      )}
      <ChatForm isMyTurn onSendMessage={handleSendMessage} />
    </Container>
  );
};

export default Turn;
