import styled from 'styled-components';
import vars from '@/styles/vars';

export const PageContainer = styled.div`
  display: flex;
  gap: 4vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-weight: ${vars.fontWeight.bold};
  font-size: ${vars.fontSize['2x']};
  text-align: center;
`;
