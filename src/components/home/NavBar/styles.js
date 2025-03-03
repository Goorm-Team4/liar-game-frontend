import styled from 'styled-components';
import { Link } from 'react-router-dom';
import vars from '../../../styles/vars';

export const NavBarContainer = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavItemContainer = styled(Link)`
  text-decoration: none;
  font-size: ${vars.fontSize['1.75x']};
  font-weight: ${vars.fontWeight.semibold};
  cursor: pointer;
  color: ${vars.colors.black};
`;

export const Label = styled.span`
  display: block;
`;
