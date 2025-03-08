import styled, { css } from 'styled-components';
import vars from '../../styles/vars';

export const BubbleContainer = styled.div`
  display: flex;
  flex-direction: ${({ myChat }) => (myChat ? 'row-reverse' : 'row')};
  align-items: flex-start;
  gap: 2vh;
  position: relative;
`;

export const ChatLarge = styled.div`
  position: relative;
  left: 0;
  transform: none;
  min-width: 40vh;
  height: 20vh;
  margin: 10vh 0;
  align-content: center;
  padding: 2vh;
  background-color: ${vars.colors.gray[200]};
  font-size: ${vars.fontSize['1.5x']};
  border-radius: ${vars.borderRadius['3x']};
  text-align: center;
  font-weight: ${vars.fontWeight.semibold};

  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 75%;
    transform: translateX(-50%);
    border-width: 15px;
    border-style: solid;
    border-color: ${vars.colors.gray[200]} transparent transparent transparent;
  }
`;

export const ChatMedium = styled.div`
  display: flex;
  flex-direction: ${({ myChat }) => (myChat ? 'row-reverse' : 'row')};
  align-items: flex-start;
`;

export const Message = styled.div`
  padding: 12px 18px;
  background-color: ${({ myChat }) =>
    myChat ? vars.colors.blue[500] : vars.colors.gray[200]};
  color: ${({ myChat }) => (myChat ? vars.colors.white : vars.colors.black)};
  font-size: ${vars.fontSize['1.25x']};
  font-weight: ${vars.fontWeight.semibold};
  border-radius: ${vars.borderRadius['3x']};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: ${({ myChat }) => (myChat ? 'right' : 'left')};
`;

export const ChatContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: ${({ myChat }) => (myChat ? 'flex-end' : 'flex-start')};
  gap: 2vh;
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
