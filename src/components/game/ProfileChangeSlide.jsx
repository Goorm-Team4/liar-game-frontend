import { Slide, ProfileList } from './styles';
import ProfileImg from '../shared/profile/ProfileImg';
import Button from '../shared/button';

const ProfileChageSlide = ({ onClick }) => {
  // api -> 보유 게임 프로필 가져오기 -> List 로 구현
  // 기능 연결 후 스타일 보고 수정하기

  return (
    <Slide>
      <p>게임 프로필 변경</p>
      <ProfileList>
        <ProfileImg />
      </ProfileList>
      <Button color="blue" onClick={onClick}>
        저장하기
      </Button>
    </Slide>
  );
};

export default ProfileChageSlide;
