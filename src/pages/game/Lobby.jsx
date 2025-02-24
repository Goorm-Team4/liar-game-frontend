import React, { useState } from 'react';
import { Container, ProfileContainer, LobbyButtonBox } from './styles';

import { useStepStore } from '@/store/step';
import useGameStore from '@/store/game';
import GameProfile from '@/components/game/GameProfile';
import Button from '@/components/shared/button/index';
import KakaoShareButton from '@/components/game/KakaoShareButton';

const Lobby = () => {
  const { nextStep } = useStepStore();
  const startGame = useGameStore((state) => state.startGame);

  const [players] = useState([]);

  const handleClick = () => {
    nextStep();
    startGame();
  };

  return (
    <Container>
      <ProfileContainer>
        {players.map((player) => (
          <GameProfile
            key={player.id}
            size="default"
            nickname={player.name}
            imgSrc={player.avatar}
          />
        ))}
      </ProfileContainer>
      <LobbyButtonBox>
        <Button size="large" color="blue" onClick={handleClick}>
          시작하기
        </Button>
        <KakaoShareButton />
      </LobbyButtonBox>
    </Container>
  );
};

export default Lobby;
