import React from 'react'
import styled from 'styled-components';

function RankPage() {
  return (
    <PageContainer>
      <HeaderContainer>
        <TitleContainer>
          랭킹
        </TitleContainer>
      </HeaderContainer>
      <MainContainer>
        Coming soon
      </MainContainer>
    </PageContainer>
  )
}

export default RankPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
  `;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 95%;
  gap: 15vh;
  margin: 5% 0;
`;

const MainContainer = styled.div`
  display: flex;
  flex : 6;
  flex-direction: column;
  width: 95%;
  gap: 15vh;
  margin-bottom: 5%;
  
  font-weight: 700;
  font-size: 4.5vh;
  text-align: center;
`;

const TitleContainer = styled.div`
font-weight: 700;
font-size: 4.5vh;
text-align: center;
`;