import styled from 'styled-components';
import RetrunButtons from '../../components/game/ReturnButtons';

function test() {
  return (
    <TestContainer>
      <RetrunButtons />
    </TestContainer>
  );
}

export default test;

const TestContainer = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;
