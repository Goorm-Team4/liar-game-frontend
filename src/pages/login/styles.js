import styled from 'styled-components';
import vars from '@/styles/vars';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 9vh;
`;

export const TitleContainer = styled.div`
  font-weight: 700;
  font-size: 4.5vh;
  text-align: center;
  margin-top: 7vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const KakaoButton = styled.button`
  padding: 0;
  border: none;
  border-radius: ${vars.borderRadius['2x']};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }

  img {
    display: flex;
  }
`;
