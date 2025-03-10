import React from 'react';
import { useModalStore } from '@/store/modal';
import LogoutModal from '@/components/mypage/LogoutModal';
import GameInterruptModal from '@/components/game/GameInterruptModal';

const GlobalModalContainer = () => {
  const { modalType, modalProps, isOpen, closeModal } = useModalStore();

  if (!isOpen) return null;

  switch (modalType) {
    case 'logout':
      return <LogoutModal isOpen={isOpen} onClose={closeModal} {...modalProps} />;
    case 'gameInterrupt':
      return <GameInterruptModal isOpen={isOpen} onClose={closeModal} {...modalProps} />;
    default:
      return null;
    }
}

export default GlobalModalContainer;
