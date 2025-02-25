import { useEffect } from 'react';
import {
  PageContainer,
  SectionContainer,
  TitleContainer,
  ButtonContainer,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { getMyinfo } from '@/api/users';
import useAuthStore from '@/store/auth';
import NavBar from '@/components/home/NavBar';
import { postCreateRoom } from '@/api/game';

import useUserStore from '@/store/user';
import { useModalStore } from '@/store/modal';
import Button from '@/components/shared/button';
import { ROUTE } from '@/constants/router';

const Home = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { user, setUser } = useUserStore();

  const openModal = useModalStore((state) => state.openModal);

  const clickCreateRoom = () => {
    if (!user.memberId) return;

    const roomId = postCreateRoom();
    console.log(roomId);
  };

  const clickLoginButton = () => {
    navigate(ROUTE.login);
  };

  const clickPlayGuide = () => {
    openModal('playGuide');
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('accessToken');
    login(code);

    getMyinfo((res) => {
      setUser({
        memberId: res.data.data.memberId,
        username: res.data.data.username,
        profileImageUrl: res.data.data.profileImageUrl,
        email: res.data.data.email,
      });
    });

    return () => {};
  }, []);

  return (
    <PageContainer>
      <SectionContainer>
        <TitleContainer>라이어게임</TitleContainer>
        <ButtonContainer>
          <Button size="large" color="blue" onClick={clickCreateRoom}>
            방 만들기
          </Button>
          {user.memberId === '' && (
            <Button size="large" color="white" onClick={clickLoginButton}>
              로그인하러가기
            </Button>
          )}
          <Button size="large" color="red" onClick={clickPlayGuide}>
            플레이 방법
          </Button>
        </ButtonContainer>
      </SectionContainer>
      <NavBar />
    </PageContainer>
  );
};

export default Home;
