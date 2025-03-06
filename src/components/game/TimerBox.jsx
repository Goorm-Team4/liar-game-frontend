import Timer from './Timer';
import { TimerContainer } from './styles';
import { useStepStore } from '../../store/step';

const TimerBox = ({ index }) => {
  const { nextStep } = useStepStore();

  if (typeof nextStep !== 'function') {
    console.error('nextStep is not a function', nextStep);
    return null;
  }

  return (
    <TimerContainer>
      <Timer index={index} onTimeUp={nextStep} />
    </TimerContainer>
  );
};

export default TimerBox;
