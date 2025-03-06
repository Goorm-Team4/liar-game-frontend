import { Container, ProfileContainer, LobbyButtonBox } from './styles';
import { useStepStore } from '../../store/step';
import GameProfile from '../../components/game/GameProfile';
import Button from '../../components/shared/button/index';
import KakaoShareButton from '../../components/game/KakaoShareButton';

import char1 from '../../assets/images/char1.png';
import char2 from '../../assets/images/char2.png';
import char3 from '../../assets/images/char3.png';
import char4 from '../../assets/images/char4.png';
import char5 from '../../assets/images/char5.png';
import char6 from '../../assets/images/char6.png';

const Lobby = () => {
  const { nextStep } = useStepStore();

  const players = [
    { id: 1, name: '산책하는 노루', avatar: char1 },
    { id: 2, name: '흥청망청 코끼리', avatar: char2 },
    { id: 3, name: '물먹는 버섯', avatar: char3 },
    { id: 4, name: '노래하는 달팽이', avatar: char4 },
    { id: 5, name: '등반하는 바위', avatar: char5 },
    { id: 6, name: '야자하는 야자나무', avatar: char6 },
  ];

  return (
    <Container>
      <ProfileContainer>
        {players.map((player) => (
          <GameProfile
            key={player.id}
            size="default"
            nickname={player.name}
            imgSrc={player.avatar}
          />
        ))}
      </ProfileContainer>
      <LobbyButtonBox>
        <Button size="large" color="blue" onClick={nextStep}>
          시작하기
        </Button>
        <KakaoShareButton />
      </LobbyButtonBox>
    </Container>
  );
};

export default Lobby;
