import styled from 'styled-components';
import vars from '../../../styles/vars';

export const HeaderContainer = styled.div`
  background-color: ${vars.colors.gray[800]};
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
`;

export const ButtonBox = styled.div``;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${vars.fontSize['1.25x']};
`;
