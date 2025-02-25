import { ButtonBox, TitleBox, HeaderContainer } from './styles';
import Button from '../button/Button';

const Header = ({ isLogo, title }) => {
  return (
    <HeaderContainer>
      {isLogo && <Logo />}
      {!isLogo && (
        <ButtonBox>
          <Button size="extra-small">뒤로</Button>
        </ButtonBox>
      )}
      <TitleBox>{title}</TitleBox>
    </HeaderContainer>
  );
};

export default Header;
