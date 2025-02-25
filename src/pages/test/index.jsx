import React from 'react';
import styled from 'styled-components';
import Button from '../../components/shared/button/Button';
import Header from '../../components/shared/header';

function test() {
  return (
    <TestContainer>
      <Header />
      <Button text="테스트입니다" size="large" />
    </TestContainer>
  );
}

export default test;

const TestContainer = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;
