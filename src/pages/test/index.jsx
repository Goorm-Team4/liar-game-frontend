import React from 'react';
import styled from 'styled-components';
import GuessLiar from '../game/ingame/GuessLiar';

function test() {
  return (
    <TestContainer>
      <GuessLiar />
    </TestContainer>
  );
}

export default test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
`;
