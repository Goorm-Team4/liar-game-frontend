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

export const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  gap: 0;
  margin: 4vh;
`;
