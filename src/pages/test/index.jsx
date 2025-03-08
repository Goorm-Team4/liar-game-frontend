import styled from 'styled-components';
import GuessAnswer from '../game/ingame/GuessAnswer';

function test() {
  return (
    <TestContainer>
      <GuessAnswer />
    </TestContainer>
  );
}

export default test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
`;
