import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/home/NavBar/index';
import PlayGuideButton from '../../components/home/PlayGuideButton';

function test() {
  return (
    <>
      <TestContainer>
        <NavBar />
      </TestContainer>

      <TestContainer>
        <PlayGuideButton />
      </TestContainer>
    </>
  );
}

export default test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
`;
