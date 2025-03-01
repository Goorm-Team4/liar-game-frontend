import Button from '../../components/shared/button';
import { ButtonBox } from './styles';
import { useNavigate } from 'react-router-dom';

const ReturnButtons = ({ onClick }) => {
  const navigate = useNavigate();
  const ClickHome = () => {
    navigate('/home'); // landing-page 제작 후 수정
  };

  return (
    <ButtonBox>
      <Button color="blue" onClick={onClick}>
        다시하기
      </Button>
      <Button color="gray" onClick={ClickHome}>
        홈으로
      </Button>
    </ButtonBox>
  );
};

export default ReturnButtons;
