import { TimerContainer } from './styles';
import { TIMER_OPTION } from '../../constants/game/constants';
import useTimer from '../../hooks/useTimer';
import { useEffect } from 'react';
import { useTurnStore } from '../../store/turn';

const TimerBox = ({ index, onNextStep }) => {
  const currentTime = TIMER_OPTION[index - 1];
  const initialTime = currentTime.time;
  const description = currentTime.description;

  const { time, startTimer } = useTimer(initialTime, () => {
    if (index === 2) {
      const { turn, players } = useTurnStore.getState();
      if (turn >= players.length) {
        onNextStep;
      }
    } else if (index !== 2) {
      onNextStep();
    }
  });

  useEffect(() => {
    startTimer();
  }, [initialTime, startTimer]);

  return (
    <TimerContainer>
      <>
        <pre>{description}</pre>
        <p>{time}</p>
      </>
    </TimerContainer>
  );
};

export default TimerBox;
