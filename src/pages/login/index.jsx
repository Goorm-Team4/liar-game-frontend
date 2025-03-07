import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import kakaoLoginLogo from '@/assets/images/kakao_login_medium_narrow.png';

const Login = () => {
  const navigate = useNavigate();
  const kakaoApiKey = import.meta.env.VITE_KAKAO_API_KEY;
  const redirect_uri = 'http://localhost:3000/auth';
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoApiKey}&redirect_uri=${redirect_uri}&response_type=code`;
  const kakaoLoginURL = `http://43.201.26.110/oauth2/authorization/kakao `;

  function kakaoLoginHandle() {
    window.location.href = kakaoURL;
  }

  return (
    <PageContainer>
      <SectionContainer>
        <TitleContainer>라이어게임</TitleContainer>
        <ButtonContainer>
          <KakaoButton onClick={() => kakaoLoginHandle()}>
            <img src={kakaoLoginLogo} />
          </KakaoButton>
          <Button onClick={() => navigate('/auth')}>게스트로 시작하기</Button>
        </ButtonContainer>
      </SectionContainer>
    </PageContainer>
  );
};

export default Login;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 9vh;
`;

const TitleContainer = styled.div`
  font-weight: 700;
  font-size: 4.5vh;
  text-align: center;
  margin-top: 7vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  background-color: #f1f1f1;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const KakaoButton = styled.button`
  padding: 0;
  width: min-content;
  height: min-content;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;
