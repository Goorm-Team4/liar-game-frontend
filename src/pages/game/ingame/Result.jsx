import { Container, Description, WinnerContainer, Keyword } from './styles';
import GameProfile from '@/components/game/GameProfile';
import ReturnButtons from '@/components/game/ReturnButtons';
import char1 from '@/assets/images/char1.png';
import char2 from '@/assets/images/char2.png';
import char3 from '@/assets/images/char3.png';
import char4 from '@/assets/images/char4.png';
import char5 from '@/assets/images/char5.png';
import char6 from '@/assets/images/char6.png';
import { RESULT_KEYWORD, RESULT_DESCRIPTION } from '@/constants/game';

const Result = () => {
  // winner 정보 api 로 받아오기
  const keyword = '메론빵';
  const winner = '시민';

  const players = [
    { id: 1, name: '산책하는 노루', avatar: char1, votes: [char2, char3] },
    { id: 2, name: '흥청망청 코끼리', avatar: char2, votes: [char4] },
    { id: 3, name: '물먹는 버섯', avatar: char3, votes: [char5, char6, char1] },
    { id: 4, name: '노래하는 달팽이', avatar: char4, votes: [] },
    { id: 5, name: '등반하는 바위', avatar: char5, votes: [] },
    // { id: 6, name: '야자하는 야자나무', avatar: char6, votes: [] },
  ];

  return (
    <Container>
      <Description option={winner}>{RESULT_DESCRIPTION[winner]}</Description>
      <WinnerContainer>
        {players.map((player) => (
          <GameProfile key={player.id} imgSrc={player.avatar} size="default" />
        ))}
      </WinnerContainer>
      <Keyword>
        {RESULT_KEYWORD}
        {keyword}
      </Keyword>
      <ReturnButtons />
    </Container>
  );
};

export default Result;
