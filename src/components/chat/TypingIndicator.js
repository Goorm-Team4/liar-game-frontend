import React from 'react';
import styled, { keyframes } from 'styled-components';

const TypingIndicator = () => (
    <TypingContainer>
        <Dot />
        <Dot />
        <Dot />
    </TypingContainer>
);

export default TypingIndicator;

const typingAnimation = keyframes`
    0% { opacity: 0.3; transform: translateY(0px); }
    50% { opacity: 1; transform: translateY(-3px); }
    100% { opacity: 0.3; transform: translateY(0px); }
`;

const TypingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dot = styled.span`
    width: 1vh;
    height: 1vh;
    margin: 0 2px;
    background-color: gray;
    border-radius: 50%;
    animation: ${typingAnimation} 1.5s infinite ease-in-out;

    &:nth-child(1) {
        animation-delay: 0s;
    }
    &:nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.4s;
    }
`;
