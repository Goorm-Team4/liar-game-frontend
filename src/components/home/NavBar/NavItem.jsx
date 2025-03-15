import React from 'react';
import { NavItemContainer } from './styles';
import Trophy from '../../../assets/icons/trophy1.svg?react'
import Shop from '../../../assets/icons/shopping_bag1.svg?react'

function NavItem({ label, path }) {
  return (
    <NavItemContainer to={path}>
        {label === "랭킹" && <Trophy width="48" height="48"/>}
        {label === "상점" && <Shop width="48" height="48"/>}
    </NavItemContainer>
  );
}

export default NavItem;
