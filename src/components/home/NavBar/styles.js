import styled from 'styled-components';
import { Link } from 'react-router-dom';
import vars from '../../../styles/vars';

export const NavBarContainer = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  gap: 20%;
  border-top: 2px solid black;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: ${vars.fontSize['1.75x']};
  font-weight: ${vars.fontWeight.semibold};
  cursor: pointer;
  color: ${vars.colors.black};
`;

export const Label = styled.span`
  display: block;
`;
