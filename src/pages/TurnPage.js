import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import char1 from "../assets/images/char1.png";
import char2 from "../assets/images/char2.png";
import char3 from "../assets/images/char3.png";

const TurnPage = () => {
    // 플레이어 더미
    const players = useMemo(
        () => [
          { id: 1, name: "산책하는 노루", avatar: char1, message: "안녕하세요" },
          { id: 2, name: "흥청망청 코끼리", avatar: char2, message: "저는 시민입니다." },
          { id: 3, name: "물먹는 버섯", avatar: char3, message: "주제를 설명해볼게요." },
        ],
        []
      );

    const [currentPlayer, setCurrentPlayer] = useState(null); // 현재 턴인 플레이어

    // 랜덤 턴
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * players.length);
        setCurrentPlayer(players[randomIndex]);
      }, [players]);

    if (!currentPlayer) {
    return <div>로딩 중...</div>;
    }

  return (
    <PageContainer>
        <SectionContainer>

            <TeamInfoContainer>
                <TeamName>라이어</TeamName>
                <Keyword>빵</Keyword>
                <Instruction>단어에 대해서 설명해주세요</Instruction>
                <Timer>30</Timer>
            </TeamInfoContainer>

            <PlayerContainer>
                <Player>
                    <Character src={currentPlayer.avatar} alt={currentPlayer.name} />
                    <Nickname>{currentPlayer.name}</Nickname>
                    <Chat>{currentPlayer.message}</Chat>
                </Player>
            </PlayerContainer>

            <ChatInputContainer>
                <ChatInput />
                <SendButton>전송</SendButton>
            </ChatInputContainer>
        </SectionContainer>
    </PageContainer>
  );
};

export default TurnPage;

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
    padding: 4vh;
`;

const TeamInfoContainer = styled.div`
    flex: 0;
    text-align: center;
    font-weight: 700;
`;

const TeamName = styled.h1`
    font-size: 3vh;
    color: #F80808;
    margin-bottom: 2.5vh;
`;

const Keyword = styled.p`
    font-size: 3vh;
    color: #000000;
`;

const Instruction = styled.p`
    margin-top: 2.5vh;
    font-size: 3vh;
    font-weight: 700;
    line-height: 4vh;
`;

const Timer = styled.div`
    margin-top: 2.5vh;
    font-size: 4vh;
    line-height: 5vh;
    color: #000000;
`;

const PlayerContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Player = styled.div`
    position: relative;
    top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Chat = styled.div`
    position: absolute;
    bottom: 27vh;
    left: 50%;
    transform: translateX(-50%);
    min-width: 40vh;
    height: 26vh;
    align-content: center;
    padding: 2vh;
    background-color: #f1f1f1;
    font-size: 2.5vh;
    border-radius: 12px;
    text-align: center;
    font-weight: 600;

    &::after {
        content: '';
        position: absolute;
        bottom: -30px; /* 말풍선 꼬리 높이 */
        left: 75%;
        transform: translateX(-50%);
        border-width: 15px;
        border-style: solid;
        border-color: #f1f1f1 transparent transparent transparent; /* 꼬리 색상 */
    }
`;

const Character = styled.img`
    width: 17vh;
    height: 17vh;
`;

const Nickname = styled.p`
    font-size: 2.5vh;
    font-weight: 600;
    margin-top: 2.5vh;
`;

const ChatInputContainer = styled.div`
    flex: 0;
    display: flex;
    gap: 1vh;
`;

const ChatInput = styled.input`
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 2vh;
`;

const SendButton = styled.button`
    padding: 8px 16px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 2vh;
    cursor: pointer;

    &:hover {
        background-color: #2980b9;
    }
`;