import styled from 'styled-components';

function test() {
  return <TestContainer></TestContainer>;
}

export default test;

const TestContainer = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;
