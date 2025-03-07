import React from 'react'
import styled from 'styled-components';
import Button from '../../components/shared/button';
import { signOut } from '../../api/users';

function LogoutModal({ isLogoutModal, modalClose, navigate }) {
  const logoutHandler = () => {
    // signOut();
    navigate("/login")
  }

  return (
    <>
      {isLogoutModal && (
        <div>
          <BlurContainer onClick={modalClose} />
          <ModalContainer>
            <span>로그아웃하시겠습니까?</span>
            <Button children={"확인"} size={"small"} onClick={() => logoutHandler()} />
          </ModalContainer>
        </div>
      )}
    </>)
}

export default LogoutModal

const BlurContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  height: 200px;
  border-radius: 20px;
  background-color: white;
  z-index: 2;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
