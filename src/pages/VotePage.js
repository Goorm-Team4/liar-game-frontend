import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import char1 from "../assets/images/char1.png";
import char2 from "../assets/images/char2.png";
import char3 from "../assets/images/char3.png";
import char4 from "../assets/images/char4.png";
import char5 from "../assets/images/char5.png";
import char6 from "../assets/images/char6.png";

function VotePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/debate");
    }, 10000);

    return () => clearTimeout(timer); // 타이머 종료
  }, [navigate])

  const players = [
    { id: 1, name: "산책하는 노루", avatar: char1, votes: [char2, char3] },
    { id: 2, name: "흥청망청 코끼리", avatar: char2, votes: [char4] },
    { id: 3, name: "물먹는 버섯", avatar: char3, votes: [char5,char6,char1] },
    { id: 4, name: "노래하는 달팽이", avatar: char4, votes: [] },
    { id: 5, name: "등반하는 바위", avatar: char5, votes: [] },
    { id: 6, name: "야자하는 야자나무", avatar: char6, votes: [] },
  ];

  return (
    <PageContainer>
      <SectionContainer>
        <ContentContainer>
          <span>라이어를 지목해주세요</span>
          <p></p>
          <span>30</span>
        </ContentContainer>
        <VoteContainer>
          {players.map((player) => (
            <div>
              <PlayerItem>
                <Character key={player.id} src={player.avatar} alt={player.name} />
                <Name>{player.name}</Name>
              </PlayerItem>
              <VoteItem>
                {player.votes.map((vote) => (
                  <VoteCharacter src={vote} alt={player.name} />
                )
                )}
              </VoteItem>
            </div>
          ))}
        </VoteContainer>

      </SectionContainer>

    </PageContainer>
  )
}

export default VotePage

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
    padding: 5vh;
`;
const ContentContainer = styled.div`
    font-weight: 700;
    font-size: 3vh;
    text-align: center;
    margin-bottom: 5vh;
`;

const VoteContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4vh;
  `;

const PlayerItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    margin-bottom: 2vh;
`;

const Character = styled.img`
    width: 6vh;
    height: auto;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 1.5vh;
`;

const VoteItem = styled.div`
    display: flex;
    align-items: normal;
    gap: 1vh;
    margin: 0 2vh;
`;

const VoteCharacter = styled.img`
    width: 2vh;
    height: auto;
`;