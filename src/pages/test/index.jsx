import styled from 'styled-components';
import Modal from '@/components/shared/modal';

const test = () => {
  return <TestContainer>
    <Modal title="플레이어 퇴장" onClose={() => {}} buttons={[{ label: "다시하기", onClick: () => console.log("clicked") }, { label: "홈으로", color: "blue", onClick: () => console.log("clicked") }]} />
    <h1>Hello, World!</h1>
    <p>This is a test modal.</p>
  </TestContainer>;
};

export default test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
`;
