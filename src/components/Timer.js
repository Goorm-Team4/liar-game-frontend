import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Timer = ({ initTime, onTimeUp, timerPause, resetTrigger = null }) => {
    const [time, setTime] = useState(initTime);

    // resetTrigger 있는 경우만 타이머 리셋 (턴 페이지)
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

    return (
        <TimerContainer>
            {time}
        </TimerContainer>
    );
};

export default Timer;

const TimerContainer = styled.div`
    margin-top: 2.5vh;
    font-size: 4vh;
    line-height: 5vh;
    color: #000000;
`;
