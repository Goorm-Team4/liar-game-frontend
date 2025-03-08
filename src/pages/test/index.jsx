import styled from 'styled-components';
import Argument from '../game/ingame/Argument';

function test() {
  return (
    <TestContainer>
      <Argument />
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
