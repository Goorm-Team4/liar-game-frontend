import React from 'react';
import NavItem from './NavItem';
import { NavBarContainer } from './styles';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import char1 from '@/assets/images/char1.png';
import useUserStore from '@/store/user';

function NavBar() {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  
  return (
    <NavBarContainer>
      <NavItem label={"랭킹"} path={'/rank'} />
      <MyPageBtn onClick={() => navigate("/mypage")}>
        <img src={char1} alt="profil" />
        <span>{user.username}</span>
      </MyPageBtn>
      <NavItem label={'상점'} path={'/shop'} />
    </NavBarContainer>
  );
}

export default NavBar;

const MyPageBtn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 100%;
  font-size: 18px;
  font-weight: 400;
  border-radius: 8px;
  cursor: pointer;
  
  img {
    height: 150%;
    background-color: #ddd;
    border-radius: 50%;
    margin: 5px;
  }
`;
