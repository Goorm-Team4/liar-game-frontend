import styled from 'styled-components';
import Turn from '@/pages/game/ingame/Turn';
import TimerBox from '@/components/game/TimerBox';
import Step from '@/components/game/Step';
import { useStepStore } from '@/store/step';

const test = () => {
  const { step, resetStep, setStep } = useStepStore();
  const reset = () => {
    resetStep();
  };

  const set = () => {
    setStep();
  };

  return (
    <TestContainer>
      <TimerBox index={step} />
      <Step index={2}>
        <Turn />
      </Step>
      <button onClick={reset}>0번 step</button>
      <button onClick={set}>2번 step</button>
    </TestContainer>
  );
};

export default test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
`;
