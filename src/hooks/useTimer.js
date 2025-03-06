import { useEffect, useState } from 'react';

const useTimer = (initialTime, onTimeUp) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            if (onTimeUp) onTimeUp();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, time, onTimeUp]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = (newTime) => {
    setTime(newTime);
    setIsRunning(false);
  };

  useEffect(() => {
    if (initialTime > 0) {
      resetTimer(initialTime);
      startTimer();
    }
  }, [initialTime]);

  return { time, startTimer, resetTimer, isRunning };
};

export default useTimer;
