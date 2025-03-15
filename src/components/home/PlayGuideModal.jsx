import React from 'react';
import { PLAYGUIDE_BUTTONS } from '@/constants/game';
import Modal from '../shared/modal';

const PlayGuideModal = ({ isOpen, onClose }) => {
  const handleAction = (action) => {
    if (action === "cancel") onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal
      title="플레이 방법"
      buttons={PLAYGUIDE_BUTTONS.map((btn) => ({
        ...btn,
        onClick: () => handleAction(btn.action),
      }))}
      child={"게임에 대한 사용 설명서입니다."}
      onClose={onClose}
    />
  );
}

export default PlayGuideModal;
