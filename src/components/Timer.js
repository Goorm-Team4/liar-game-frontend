import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Timer = ({ initTime = 30, onTimeUp }) => {
    const [time, setTime] = useState(initTime);

    useEffect(() => {
        if (time <= 0) {
            onTimeUp(); // 시간이 끝나면 부모 컴포넌트에서 처리
            return;
        }

        const timer = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [time, onTimeUp]);

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
