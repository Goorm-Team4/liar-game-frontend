import styled from 'styled-components';

export const GameLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 28px;
`;

export const Container = styled.div`
  margin: 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  justify-items: center;
`;

export const LobbyButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20vh 0;
  gap: 4vh;
`;
