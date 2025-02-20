import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function RolePage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/turn");
    }, 2000);

    return () => clearTimeout(timer); // 타이머 종료
  }, [navigate])

  const keyword = "비행기"; // 더미

  return (
    <PageContainer>
      <SectionContainer>
        <ContentContainer>
          <RoleContainer>
          당신은 시민입니다.
          </RoleContainer>
          <KeywordContainer>
          단어 : {keyword}
          </KeywordContainer>
        </ContentContainer>
      </SectionContainer>

    </PageContainer>
  )
}

export default RolePage


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

const ContentContainer = styled.div`
    font-weight: 700;
    font-size: 1vw;
    text-align: center;
`;

const RoleContainer = styled.div`
    margin-bottom: 7vh;
`;

const KeywordContainer = styled.div`
`;