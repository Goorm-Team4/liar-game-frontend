import React from 'react';
import styled from 'styled-components';
import Turn from '../game/ingame/Turn';

function test() {
  return (
    <TestContainer>
      <Turn />
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
