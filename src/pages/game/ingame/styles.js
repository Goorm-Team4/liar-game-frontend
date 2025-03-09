import styled from 'styled-components';
import vars from '@/styles/vars';

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

export const InputContainer = styled.div`
  width: 55vh;
  position: fixed;
  bottom: 0;
  z-index: 100;
`;

export const Description = styled.div`
  color: ${({ option }) =>
    option === '시민' ? `${vars.colors.blue[500]}` : `${vars.colors.red}`};
  font-size: ${vars.fontSize['2x']};
  font-weight: ${vars.fontWeight.semibold};
  margin: 5vh;
`;

export const WinnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: cneter;
  align-items: center;
  margin: 5vh 0;
`;

export const Keyword = styled.div`
  margin-bottom: 7vh;
  font-size: ${vars.fontSize['1.5x']};
  font-weight: ${vars.fontWeight.semibold};
`;
