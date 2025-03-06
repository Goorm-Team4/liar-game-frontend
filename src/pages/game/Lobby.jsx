import styled from 'styled-components';
import { useStepStore } from '../../store/step';

const Lobby = () => {
  const { nextStep } = useStepStore((state) => ({
    nextStep: state.nextStep,
  }));

  const players = [
    { id: 1, name: '산책하는 노루', avatar: char1 },
    { id: 2, name: '흥청망청 코끼리', avatar: char2 },
    { id: 3, name: '물먹는 버섯', avatar: char3 },
    { id: 4, name: '노래하는 달팽이', avatar: char4 },
    { id: 5, name: '등반하는 바위', avatar: char5 },
    { id: 6, name: '야자하는 야자나무', avatar: char6 },
  ];

  return (
    <PageContainer>
      <SectionContainer>
        <PlayerContainer>
          {players.map((player) => (
            <PlayerItem>
              <Character
                key={player.id}
                src={player.avatar}
                alt={player.name}
              />
              <Name>{player.name}</Name>
            </PlayerItem>
          ))}
        </PlayerContainer>
        <ContentContainer>
          <span>아래 링크를 공유하세요!</span>
        </ContentContainer>
        <ButtonContainer>
          <AiPlayerContainer>
            <Button>-</Button>
            AI 플레이어
            <Button>+</Button>
          </AiPlayerContainer>
          <Button onClick={nextStep}>게임 시작</Button>
        </ButtonContainer>
      </SectionContainer>
    </PageContainer>
  );
};

export default Lobby;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 9vh;
`;

const ContentContainer = styled.div`
  font-weight: 700;
  text-align: center;
  margin: 3vh 0vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  width: 90%;
  align-self: center;
  justify-content: center;
`;

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1vh;
`;

const AiPlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vh;
`;

const PlayerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5vh;
`;

const Character = styled.img`
  width: 6vh;
  height: auto;
`;

const Name = styled.span`
  font-size: 1.5vh;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 2.5vh;
  font-weight: 500;
  background-color: #f1f1f1;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
