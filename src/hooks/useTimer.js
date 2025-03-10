import { useEffect, useRef, useState } from 'react';

const useTimer = (initialTime, onTimeUp) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, time]);

  useEffect(() => {
    if (time === 0) {
      if (onTimeUp) onTimeUp();
    }
  }, [time, onTimeUp]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = (newTime) => {
    stopTimer();
    setTime(newTime);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return { time, startTimer, resetTimer, isRunning, stopTimer };
};

export default useTimer;
