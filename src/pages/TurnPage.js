import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ChatInput from '../components/chat/ChatInput';
import TypingIndicator from '../components/chat/TypingIndicator';

import char1 from "../assets/images/char1.png";
import char2 from "../assets/images/char2.png";
import char3 from "../assets/images/char3.png";
import char4 from "../assets/images/char4.png";

const TurnPage = () => {
    // 플레이어 더미
    const [players, setPlayers] = useState([
        { id: 1, name: "산책하는 노루", avatar: char1, message: "" },
        { id: 2, name: "흥청망청 코끼리", avatar: char2, message: "" },
        { id: 3, name: "물먹는 버섯", avatar: char3, message: "" },
        { id: 4, name: "노래하는 달팽이", avatar: char4, message: "" },
    ]);

    const userId = 4; // 임의 본인 id
    const [availablePlayers, setAvailablePlayers] = useState([...players]);
    const [currentPlayer, setCurrentPlayer] = useState(null); // 현재 턴인 플레이어
    const [myTurn, setMyTurn] = useState(false); // 현재 턴인지 확인
    const [hasSubmitted, setHasSubmitted] = useState(false); // 채팅 한번만 입력 가능
    const [isTyping, setIsTyping] = useState(false); // 입력 중인지

    // 게임 시작 시 랜덤 턴 배정
    useEffect(() => {
        selectRandomPlayer();
    }, []);

    // 랜덤 플레이어 선택
    const selectRandomPlayer = () => {
        if (availablePlayers.length === 0) {
            setAvailablePlayers([...players]);
        }

        const randomIdx = Math.floor(Math.random() * availablePlayers.length);
        const selectedPlayer = availablePlayers[randomIdx];

        setCurrentPlayer(selectedPlayer);
        setMyTurn(selectedPlayer.id === userId);
        setAvailablePlayers((prev) => prev.filter((p) => p.id !== selectedPlayer.id));
    };

    const handleSendMessage = (message) => {
        if (myTurn && !hasSubmitted) {
            setPlayers((prev) =>
                prev.map((player) =>
                    player.id === currentPlayer.id ? { ...player, message } : player
                )
            );

            setCurrentPlayer((prev) => ({ ...prev, message }));
            setHasSubmitted(true);
            setIsTyping(false);
            moveToNextPlayer();
        }
    };

      // 다음 플레이어로 랜덤 선택
    const moveToNextPlayer = () => {
        setTimeout(() => {
        setHasSubmitted(false);
        selectRandomPlayer();
        }, 1000);
    };

    // 입력 감지
    const handleTyping = (text) => {
        if (myTurn) {
            setIsTyping(text.length > 0);
        }
    };

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
                        <Chat>
                            {myTurn && isTyping ? <TypingIndicator /> : currentPlayer.message || <TypingIndicator />}
                        </Chat>
                    </Player>
                </PlayerContainer>

                <ChatInput
                    onSendMessage={handleSendMessage}
                    onTyping={handleTyping}
                    placeholder={myTurn ? "메세지를 입력해주세요" : "현재 순서가 아닙니다"}
                    disabled={!myTurn || hasSubmitted}
                />

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