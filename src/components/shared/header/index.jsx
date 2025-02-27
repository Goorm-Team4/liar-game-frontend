import { ButtonBox, TitleBox, HeaderContainer } from './styles';
import Button from '../button';

const Header = ({ icon, title }) => {
  return (
    <HeaderContainer>
      {icon === 'logo' && <Logo />}
      {icon === 'button' && (
        <ButtonBox>
          <Button size="extra-small" color="white">{`<`}</Button>
        </ButtonBox>
      )}
      <TitleBox>{title}</TitleBox>
    </HeaderContainer>
  );
};

export default Header;
