import styled from 'styled-components';
import Button from '../../components/shared/button/Button';
import Header from '../../components/shared/header';

function test() {
  return (
    <TestContainer>
      <Header />
      <Button size="large" color="blue">
        안녕
      </Button>
      <Button size="medium" color="gray">
        안녕
      </Button>
      <Button size="small" color="white">
        누구?
      </Button>
      <Button size="extra-small">{`<`}</Button>
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
