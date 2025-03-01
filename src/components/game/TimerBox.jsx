import Timer from '../Timer';
import { TIMER_OPTION } from './constants';
import { TimerContainer } from './styles';

const TimerBox = ({ index }) => {
  // Timer 문구와, 시간 constants 로 매핑하여 사용
  // 화면 구현 시 Timer -> hooks 로 바꾸며 수정
  const timerOption = TIMER_OPTION.find((option) => option.index === index);
  const description = timerOption
    ? timerOption.description
    : '설명이 없습니다.';

  return (
    <TimerContainer>
      <p>{description}</p>
      <Timer />
    </TimerContainer>
  );
};

export default TimerBox;
