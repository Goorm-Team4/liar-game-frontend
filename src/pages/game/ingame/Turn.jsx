import { useState, useEffect } from 'react';
import { Container } from './styles';
import ChatBubble from '@/components/chat/ChatBubble';
import GameProfile from '@/components/game/GameProfile';
import ChatForm from '@/components/chat/ChatForm';
import { useTurnStore } from '@/store/turn';

const Turn = () => {
  const { players, incrementTurn } = useTurnStore();
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [lastMessage, setLastMessage] = useState('');

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setLastMessage(message);

    const timeoutId = setTimeout(() => {
      // 이 부분 player 교체 되면서 말풍선도 reset 할건지 결정.
      if (currentPlayerIndex < players.length - 1) {
        setCurrentPlayerIndex((prev) => prev + 1);
      }
      incrementTurn();
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
