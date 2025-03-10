import { TimerContainer } from './styles';
import { TIMER_OPTION } from '@/constants/game';
import useTimer from '@/hooks/useTimer';
import { useEffect } from 'react';
import { useStepStore } from '@/store/step';

const TimerBox = ({ index }) => {
  const { nextStep } = useStepStore();

  const currentTime = index > 0 && index < 7 && TIMER_OPTION[index];
  const initialTime = currentTime.time;
  const description = currentTime.description;

  const { time, startTimer, resetTimer, stopTimer } = useTimer(
    initialTime,
    nextStep
  );

  useEffect(() => {
    if (initialTime > 0) {
      resetTimer(initialTime);
      startTimer();
    }

    if (index === 0 || index === 7) {
      stopTimer(0);
    }
  }, [initialTime, index]);

  return (
    <TimerContainer index={index}>
      <pre>{description}</pre>
      <p>{time}</p>
    </TimerContainer>
  );
};

export default TimerBox;
