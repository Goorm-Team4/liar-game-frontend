import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/shared/header';
import ProfileImg from '../../components/shared/profile/ProfileImg';
import char1 from '../../assets/images/char1.png';
import Button from '../../components/shared/button';
import EditProfile from './editProfile';
import { useModalStore } from '@/store/modal';

function MyPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("main");

  // 모달 컨트롤
  const openModal = useModalStore((state) => state.openModal);

  return (
    <PageContainer>
      <Header icon={'button'} />
      {tab === "main" && <Main setTab={setTab} openModal={() => openModal("logout", { navigate })} />}
      {tab === "edit" && <EditProfile setTab={setTab} />}
    </PageContainer>
  );
}

export default MyPage;

const Main = ({ setTab, openModal }) =>
  <>
    <MyInfoContainer>
      <ProfileImgContainer>
        <ProfileImg size={"120px"} src={char1} />
      </ProfileImgContainer>
      <div>
        <span>상냥한 산양</span>
      </div>
    </MyInfoContainer>
    <BorderLine />
    <MenuContainer>
      <Button color={"white"} children={"프로필 수정"} onClick={() => setTab("edit")} />
      <Button color={"white"} children={"나의 게임정보"} />
      <Button color={"white"} children={"플레이방법"} />
      <Button color={"white"} children={"계정설정"} />
      <Button color={"white"} children={"문의하기"} />
      <Button color={"white"} children={"로그아웃"} onClick={openModal} />
    </MenuContainer>
  </>

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ProfileImgContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  padding: none;
`;

const MyInfoContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  `;


const BorderLine = styled.div`
  width: 80%;
  border-bottom: 1px solid gray;
`;

const MenuContainer = styled.div`
  display: flex;
  flex: 2;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;