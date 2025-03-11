import React from 'react';
import { GAME_INTERRUPTED_BUTTONS } from '@/constants/game';
import Modal from '../shared/modal';

const GameInterruptModal = ({ isOpen, onRetry, onHome }) => {
  if (!isOpen) return null;

  // Ingame 내에서 함수 작성
  const handleAction = (action) => {
    if (action === "retry") onRetry();
    if (action === "home") onHome();
  };

  return (
    <Modal
      title={
        <>
          플레이어 퇴장
          <br />
          게임이 중단되었습니다
        </>
      }
      buttons={GAME_INTERRUPTED_BUTTONS.map((btn) => ({
        ...btn,
        onClick: () => handleAction(btn.action),
      }))}
      onClose={onHome}
    />
  );
}

export default GameInterruptModal;
