import styled, { css } from 'styled-components';
import vars from '../../styles/vars';

export const ShareLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
  padding: 2px;

  pre {
    font-weight: ${vars.fontWeight.medium};
    font-size: ${vars.fontSize['0.75x']};
    color: ${vars.colors.gray[500]};
  }

  button {
    background-color: transparent;
    border: none;
    margin: 4px;
    cursor: pointer;
    color: ${vars.colors.yellow[500]};
    font-size: ${vars.fontSize['1.25x']};
  }
`;

export const GameProfileContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ size, mg }) => {
    const height = mg ? `${size - 24}px` : `${size}px`;

    return css`
      width: ${size};
      height: ${height};
    `;
  }}
`;

const VotedPlayerSize = {
  small: '100px;',
  default: '130px;',
};

export const VotedPlayerContainer = styled.div`
  background-color: transparent;
  margin: 4px;
  padding: 2px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${({ size }) => {
    return css`
      max-width: ${VotedPlayerSize[size]};
    `;
  }}
`;

export const VoteContainer = styled.div`
  background-color: transparent;
  margin: 16px;
  padding: 4px;
  display: grid;
  grid-template-columns: reapeat(2, 1fr);
  gap: 8px;
`;

export const VoteOption = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

export const GuessContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

export const ButtonBox = styled.div`
  margin: 4px;
  padding: 4px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  pre {
    margin: 4px;
    font-size: ${vars.fontSize['1.25x']};
    font-weight: ${vars.fontWeight.semibold};
  }

  p {
    margin: 4px;
    padding: 4px;
    font-size: ${vars.fontSize['1.75x']};
    font-weight: ${vars.fontWeight.bold};
  }
`;

export const Slide = styled.div`
  background-color: ${vars.colors.white};
  border-top-left-radius: ${vars.borderRadius['2x']};
  border-top-right-radius: ${vars.borderRadius['2x']};
  padding: 16px;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  animation: slide-up 0.5s ease-in-out forwards;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);

  @keyframes slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  p {
    font-size: ${vars.fontSize['1x']};
    font-weight: ${vars.fontWeight.medium};
    text-align: center;
  }
`;

export const ProfileList = styled.div`
  margin: 8px;
  padding: 8px;
  height: 100%;
  width: 100%;
`;
