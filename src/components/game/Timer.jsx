import styled from 'styled-components';
import useTimer from '../../hooks/useTimer';
import { TIMER_OPTION } from '../../constants/game/constants';

const Timer = ({
  index,
  onTimeUp,
  timerPause = false,
  resetTrigger = null,
}) => {
  if (index < 1 || index > TIMER_OPTION.length) {
    return <p>유효하지 않은 타이머 인덱스입니다.</p>;
  }

  const { time, description } = TIMER_OPTION[index - 1];
  const currentTime = useTimer(time, onTimeUp, timerPause, resetTrigger);

  return (
    <TimerContainer>
      {index !== 1 && (
        <>
          <pre>{description}</pre>
          <p>{currentTime}</p>
        </>
      )}
    </TimerContainer>
  );
};

export default Timer;

const TimerContainer = styled.div`
  margin: 2.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  pre {
    margin: 4px;
    font-size: 20px;
    font-weight: semi-bold;
  }

  p {
    margin: 4px;
    padding: 4px;
    font-size: 32px;
    font-weight: semi-bold;
  }
`;
