import { ButtonBox, TitleBox, HeaderContainer } from './styles';
import Button from '../button';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/constants/router';
import LogoBox from '../logo/LogoBox';

const Header = ({ icon, title }) => {
  const navigate = useNavigate();

  const clickButton = () => {
    navigate(ROUTE.main);
  };

  return (
    <HeaderContainer>
      {icon === 'logo' && <LogoBox />}
      {icon === 'button' && (
        <ButtonBox>
          <Button
            size="extra-small"
            color="white"
            onClick={clickButton}
          >{`<`}</Button>
        </ButtonBox>
      )}
      <TitleBox>{title}</TitleBox>
    </HeaderContainer>
  );
};

export default Header;
