import { useState, useEffect } from 'react';

const useTimer = (initTime, onTimeUp, timerPause, resetTrigger) => {
  const [time, setTime] = useState(initTime);

  useEffect(() => {
    if (resetTrigger !== null) {
      setTime(initTime);
    }
  }, [resetTrigger]);

  useEffect(() => {
    if (timerPause) return;

    if (time === 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, timerPause]);

  return time;
};

export default useTimer;
