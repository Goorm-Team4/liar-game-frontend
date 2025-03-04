import React from 'react';
import styled from 'styled-components';

function test() {
  return <TestContainer></TestContainer>;
}

export default test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
`;
