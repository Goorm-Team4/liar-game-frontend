import React from 'react';
import navData from './navData';
import NavItem from './NavItem';
import { NavBarContainer } from './styles';

function NavBar() {
  return (
    <NavBarContainer>
      {navData.map((item) => (
        <NavItem key={item.path} label={item.label} path={item.path} />
      ))}
    </NavBarContainer>
  );
}

export default NavBar;
