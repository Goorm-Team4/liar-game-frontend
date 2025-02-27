<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/home/NavBar/index';

function test() {
  return (
    <TestContainer>
      <ContentContainer>
        <h1>테스트</h1>
      </ContentContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
    </TestContainer>
  );
}

export default test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

const NavBarContainer = styled.div`
  margin-top: auto;
`;
