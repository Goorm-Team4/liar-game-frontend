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
      if (typeof onTimeUp === 'function') {
        onTimeUp();
      }
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, timerPause, onTimeUp]);

  return time;
};

export default useTimer;
