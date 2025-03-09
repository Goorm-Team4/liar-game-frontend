import styled from 'styled-components';
import Result from '@/pages/game/ingame/Result';

function test() {
  return (
    <TestContainer>
      <Result />
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
