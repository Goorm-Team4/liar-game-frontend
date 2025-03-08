import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlayerContainer = styled.div`
  width: 100%;
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0px;
  justify-items: center;
`;

export const GuessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  gap: 0;
  margin: 4vh;
`;

export const VoteContainer = styled.div`
  margin: 15vh;
`;

export const Option = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6vh;
`;

export const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const ThumbsIcon = styled.div`
  margin-bottom: 2vh;
  img {
    width: 96px;
    height: 96px;
  }
`;

export const ChatContainer = styled.div`
  width: 55vh;
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`;

export const InputConatiner = styled.div`
  width: 55vh;
  position: fixed;
  bottom: 0;
  z-index: 100;
`;
