import { useState, useEffect } from 'react';
import { Container } from './styles';
import ChatBubble from '../../../components/chat/ChatBubble';
import GameProfile from '../../../components/game/GameProfile';
import ChatForm from '../../../components/chat/ChatForm';
import { useTurnStore } from '../../../store/turn';

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
  const { turn, incrementTurn, setPlayers } = useTurnStore((state) => ({
    turn: state.turn,
    incrementTurn: state.incrementTurn,
    setPlayers: state.setPlayers,
  }));

  const [players] = useState(dummyPlayers);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [lastMessage, setLastMessage] = useState('');
  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    setPlayers(dummyPlayers);
  }, [setPlayers]);

  useEffect(() => {
    if (players.length > 0) {
      setCurrentPlayer(players[turn]);
      setTime(30);
      setIsRunning(true);
    }
  }, [turn, players]);

  useEffect(() => {
    if (isRunning && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (time === 0) {
      handleNextTurn();
    }
  }, [isRunning, time]);

  const handleNextTurn = () => {
    incrementTurn();
    setTime(30);
    setLastMessage('');
  };

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setLastMessage(message);
    setPlayers((prev) => {
      return prev.map((player) =>
        player.id === currentPlayer.id ? { ...player, message } : player
      );
    });
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
      <p>남은 시간: {time}초</p> {/* 남은 시간 표시 */}
    </Container>
  );
};

export default Turn;
