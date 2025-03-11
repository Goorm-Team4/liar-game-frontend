import React from 'react';
import { LOGOUT_BUTTONS } from '@/constants/game';
import Modal from '../shared/modal';
import { signOut } from '@/api/users';

const LogoutModal = ({ isOpen, onClose, navigate }) => {
  const handleAction = (action) => {
    if (action === "logout") navigate("/login"); // 로그아웃 기능 적용해야 함
    if (action === "cancel") onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal
      title="로그아웃 하시겠습니까?"
      buttons={LOGOUT_BUTTONS.map((btn) => ({
        ...btn,
        onClick: () => handleAction(btn.action),
      }))}
      onClose={onClose}
    />
  );
}

export default LogoutModal;
