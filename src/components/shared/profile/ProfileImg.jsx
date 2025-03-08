import { ImgBox } from './styles';

const ProfileImg = ({ size, src, hidden }) => {
  return (
    <ImgBox size={size} hidden={hidden}>
      <img src={src} />
    </ImgBox>
  );
};

export default ProfileImg;
