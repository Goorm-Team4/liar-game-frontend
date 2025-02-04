import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function MainPage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <SectionContainer>
        <TitleContainer>
          라이어게임
        </TitleContainer>
        <ButtonContainer>
          <Button onClick={() => navigate("/room")}>방 만들기</Button>
          <ManualButton>플레이 방법</ManualButton>
        </ButtonContainer>
      </SectionContainer>

    </PageContainer>
  )
}

export default MainPage

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 9vh;
`;

const TitleContainer = styled.div`
    font-weight: 700;
    font-size: 4.5vh;
    text-align: center;
    margin-top: 7vh;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vh;
    width: 90%;
    align-self: center;
    justify-content: center;
    `;

const Button = styled.button`
    padding: 12px 24px;
    font-size: 2.5vh;
    font-weight: 500;
    background-color: #f1f1f1;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    
    &:hover {
      background-color: #ddd;
    }
    `;

const ManualButton = styled.button`
    padding: 0;
    margin: 0;
    font-size: 2.5vh;
    font-weight: 500;
    color: #F80808;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:active {
      transform: scale(.95)
    }
`;