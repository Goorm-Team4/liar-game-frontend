import React from 'react';
import { NavItemContainer, Label } from './styles';

function NavItem({ label, path }) {
  return (
    <NavItemContainer to={path}>
      <Label>{label}</Label>
    </NavItemContainer>
  );
}

export default NavItem;
