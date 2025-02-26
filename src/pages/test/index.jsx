import styled from 'styled-components';
import KakaoShareButton from '../../components/game/KakaoShareButton';

function test() {
  return (
    <TestContainer>
      <KakaoShareButton />
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
