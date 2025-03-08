import {
  Container,
  VoteContainer,
  Option,
  ThumbsContainer,
  ThumbsIcon,
} from './styles';
import GameProfile from '../../../components/game/GameProfile';
import VotedPlayer from '../../../components/game/VotedPlayer';

import char1 from '../../../assets/images/char1.png';
import char2 from '../../../assets/images/char2.png';
import char3 from '../../../assets/images/char3.png';
import char4 from '../../../assets/images/char4.png';
import char5 from '../../../assets/images/char5.png';
import char6 from '../../../assets/images/char6.png';
import { useState } from 'react';

const Vote = () => {
  const { isAgree, setIsAgree } = useState();
  const myInfo = { id: 1, name: '산책하는 노루', avatar: char1 };
  const liarInfo = { id: 2, name: '흥청망청 코끼리', avatar: char2 };
  // 웹소켓 연결 후 api 로직 작성
  // 내 플레이어 정보를 useUserStore에서 꺼내와야 함.

  const handleClick = () => {
    setIsAgree(!isAgree);
  };

  // 이 부분도 api 로 받아와야함.
  const THUMBS_OPTIONS = [
    {
      option: 'agree',
      src: 'char1',
      votes: [char1, char2, char3, char4],
    },
    {
      option: 'disagree',
      src: 'char1',
      votes: [char5, char6],
    },
  ];

  return (
    <Container>
      <VoteContainer>
        <GameProfile
          size="large"
          nickname={liarInfo.name}
          imgSrc={liarInfo.avatar}
          mg={true}
        />
      </VoteContainer>
      <Option>
        {THUMBS_OPTIONS.map((option) => (
          <ThumbsContainer key={option.option} onClick={handleClick}>
            <ThumbsIcon>
              <img src={option.src} />
            </ThumbsIcon>
            <VotedPlayer size="default" votes={option.votes} />
          </ThumbsContainer>
        ))}
      </Option>
    </Container>
  );
};

export default Vote;
