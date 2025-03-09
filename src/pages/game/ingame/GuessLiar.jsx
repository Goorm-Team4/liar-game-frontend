import { Container, PlayerContainer, GuessContainer } from './styles';
import GameProfile from '@/components/game/GameProfile';
import VotedPlayer from '@/components/game/VotedPlayer';

import char1 from '@/assets/images/char1.png';
import char2 from '@/assets/images/char2.png';
import char3 from '@/assets/images/char3.png';
import char4 from '@/assets/images/char4.png';
import char5 from '@/assets/images/char5.png';
import char6 from '@/assets/images/char6.png';
import { useState } from 'react';

function GuessLiar() {
  const { isClicked, setIsClicked } = useState();
  const myInfo = { id: 1, name: '산책하는 노루', avatar: char1 };
  // 웹소켓 연결 후 api 로직 작성
  // 내 플레이어 정보를 useUserStore에서 꺼내와야 함.
  // targetId (내가 투표한 플레이어의 아이디 저장 -> 즉시 반영해야됨)

  const players = [
    { id: 1, name: '산책하는 노루', avatar: char1, votes: [char2, char3] },
    { id: 2, name: '흥청망청 코끼리', avatar: char2, votes: [char4] },
    { id: 3, name: '물먹는 버섯', avatar: char3, votes: [char5, char6, char1] },
    { id: 4, name: '노래하는 달팽이', avatar: char4, votes: [] },
    { id: 5, name: '등반하는 바위', avatar: char5, votes: [] },
    { id: 6, name: '야자하는 야자나무', avatar: char6, votes: [] },
  ];

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container>
      <PlayerContainer>
        {players.map((player) => (
          <GuessContainer key={player.id} onClick={handleClick}>
            <GameProfile
              size="default"
              nickname={player.name}
              imgSrc={player.avatar}
              mg={true}
            />
            <VotedPlayer size="small" votes={player.votes} />
          </GuessContainer>
        ))}
      </PlayerContainer>
    </Container>
  );
}

export default GuessLiar;
