import { ImgBox } from './styles';

const ProfileImg = ({ size, src }) => {
  return (
    <ImgBox size={size}>
      <img src={src} />
    </ImgBox>
  );
};

export default ProfileImg;
