import styled from 'styled-components';
import vars from '../../../styles/vars';

export const HeaderContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
`;

export const TitleBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: ${vars.fontSize['1.25x']};
  font-weight: ${vars.fontWeight.semibold};
  color: ${vars.colors.black};
`;
