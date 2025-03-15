import Button from '@/components/shared/button';
import { PageContainer, MainContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/constants/router';

const ComingSoon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTE.main);
  };
  return (
    <PageContainer>
      <MainContainer>Coming soon</MainContainer>
      <Button size="large" color="blue" onClick={handleClick}>
        홈으로
      </Button>
    </PageContainer>
  );
};

export default ComingSoon;
