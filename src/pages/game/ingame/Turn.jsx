import { useState, useEffect } from 'react';
import { Container } from './styles';
import ChatBubble from '@/components/chat/ChatBubble';
import GameProfile from '@/components/game/GameProfile';
import ChatForm from '@/components/chat/ChatForm';
import { useTurnStore } from '@/store/turn';

import char1 from '@/assets/images/char1.png';
import char2 from '@/assets/images/char2.png';
import char3 from '@/assets/images/char3.png';
import char4 from '@/assets/images/char4.png';

const dummyPlayers = [
  { id: 1, name: '산책하는 노루', avatar: char1, message: '' },
  { id: 2, name: '흥청망청 코끼리', avatar: char2, message: '' },
  { id: 3, name: '물먹는 버섯', avatar: char3, message: '' },
  { id: 4, name: '노래하는 달팽이', avatar: char4, message: '' },
];

const Turn = () => {
  const {
    setPlayers,
    players,
    incrementTurn,
    setPlayerCount,
    startTurn,
    endTurn,
  } = useTurnStore();
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [lastMessage, setLastMessage] = useState('');

  useEffect(() => {
    setPlayers(dummyPlayers);
    setPlayerCount(dummyPlayers.length);
    startTurn();
  }, []);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setLastMessage(message);

    const timeoutId = setTimeout(() => {
      // 이 부분 player 교체 되면서 말풍선도 reset 할건지 결정.
      if (currentPlayerIndex < players.length - 1) {
        setCurrentPlayerIndex((prev) => prev + 1);
        incrementTurn();
      } else {
        endTurn();
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  };

  const currentPlayer = players[currentPlayerIndex];

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
