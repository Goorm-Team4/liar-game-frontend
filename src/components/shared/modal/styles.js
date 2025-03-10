import styled from "styled-components";
import vars from "@/styles/vars";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 300px;
  border-radius: ${vars.borderRadius['4x']};
  background-color: ${vars.colors['white']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
  padding: 30px;
`;

export const TitleContainer = styled.h2`
  font-size: ${vars.fontSize['1.25x']};
  font-weight: ${vars.fontWeight['semibold']};
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
`;
