import React from 'react';
import styled from'styled-components';
import { useNavigate } from 'react-router-dom';

import char1 from "../assets/images/char1.png";
import char2 from "../assets/images/char2.png";
import char3 from "../assets/images/char3.png";
import char4 from "../assets/images/char4.png";
import char5 from "../assets/images/char5.png";
import char6 from "../assets/images/char6.png";

const ResultPage = () => {
    const navigate = useNavigate();

    const isLiarWin = false; // 더미
    const players = [
            { id: 1, name: "산책하는 노루", avatar: char1 },
            { id: 2, name: "흥청망청 코끼리", avatar: char2 },
            { id: 3, name: "물먹는 버섯", avatar: char3 },
            { id: 4, name: "노래하는 달팽이", avatar: char4 },
            { id: 5, name: "등반하는 바위", avatar: char5 },
            { id: 6, name: "야자하는 야자나무", avatar: char6 },
    ];
    const keyword = "비행기"; // 더미
    const liar = players.find((player) => player.id === 1); // 더미
    const citizen = players.filter((player) => player.id !== liar.id);

    // 시민 승리시 플레이어 배치 로직
    const renderCitizen = () => {
        const total = citizen.length;
        const rows = [];

        if (total === 2) {
            rows.push(citizen);
        } else if (total === 3) {
            rows.push([citizen[0]]);
            rows.push([citizen[1], citizen[2]]);
        } else if (total === 4) {
            rows.push([citizen[0], citizen[1]]);
            rows.push([citizen[2], citizen[3]]);
        } else if (total === 5) {
            rows.push([citizen[0], citizen[1], citizen[2]]);
            rows.push([citizen[3], citizen[4]]);
        }

        return rows.map((row, index) => (
            <Row key={index}>
                {row.map((player) => (
                    <Character key={player.id} src={player.avatar} alt={player.name} />
                ))}
            </Row>
        ));
    };

  return (
    <PageContainer>
        <SectionContainer>

            <HeaderContainer>
                <WinAnnouncement isLiarWin={isLiarWin}>
                    {isLiarWin ? "라이어 승리!" : "시민 승리!"}
                </WinAnnouncement>
            </HeaderContainer>

            <PlayerContainer>
                {isLiarWin ? (
                    <>
                        <Character src={char1} alt="Liar" isLiarWin={true} />
                        <KeywordText>제시어는 {keyword}</KeywordText>
                    </>
                    ) : (
                        <>
                            {renderCitizen()}
                            <KeywordText>제시어는 {keyword}</KeywordText>
                        </>
                    )} 
            </PlayerContainer>

            <ButtonContainer>
                <Button onClick={() => navigate("retry")}>다시하기</Button>
                <Button onClick={() => navigate("/")}>홈으로</Button>
            </ButtonContainer>
        </SectionContainer>
    </PageContainer>
  )
}

export default ResultPage;

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 9vh;
`;

const HeaderContainer = styled.div`
    font-weight: 700;
    text-align: center;
    margin-top: 7vh;
`;

const WinAnnouncement = styled.h1`
    font-size: 4vh;
    color: ${({ isLiarWin }) => (isLiarWin ? "#f80808" : "#1768FF")};
    margin-bottom: 2.5vh;
`;

const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    margin-bottom: 3vh;
`;

const Character = styled.img`
    width: ${({ isLiarWin }) => (isLiarWin ? "25vh" : "13vh")};
    height: auto; 
    transition: all 0.3s ease;
    margin-bottom: ${({ isLiarWin }) => (isLiarWin ? "5vh" : 0)}
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    gap: 2vh;
    margin-bottom: 2vh;
    flex-wrap: wrap;
`;

const KeywordText = styled.div`
    font-size: 3vh;
    font-weight: 700;
    color: #000000;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vh;
    width: 90%;
    align-self: center;
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