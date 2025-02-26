import styled from 'styled-components';
import Header from '../../components/shared/header';
import img from '../../assets/images/char1.png'
import Input from '../../components/shared/input';

function test() {
  return <TestContainer>
  </TestContainer>;
}

export default test;

const TestContainer = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;
