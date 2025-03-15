import {
  PageContainer,
  SectionContainer,
  TitleContainer,
  ButtonContainer,
  KakaoButton,
} from './styles';
import { useNavigate } from 'react-router-dom';
import kakaoLoginLogo from '@/assets/images/kakaoLogin.svg';
import Button from '@/components/shared/button';
import { ROUTE } from '@/constants/router';

const Login = () => {
  const navigate = useNavigate();
  const kakaoLoginURL = import.meta.env.VITE_KAKAO_URL;

  function kakaoLoginHandle() {
    window.location.href = kakaoLoginURL;
  }

  const handleGuestLogin = () => {
    navigate(ROUTE.auth);
  };

  return (
    <PageContainer>
      <SectionContainer>
        <TitleContainer>LiarTalk</TitleContainer>
        <ButtonContainer>
          <KakaoButton onClick={() => kakaoLoginHandle()}>
            <img src={kakaoLoginLogo} />
          </KakaoButton>
          <Button size="large" color="gray" onClick={handleGuestLogin}>
            게스트로 시작하기
          </Button>
        </ButtonContainer>
      </SectionContainer>
    </PageContainer>
  );
};

export default Login;
