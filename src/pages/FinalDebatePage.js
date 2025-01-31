import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import char1 from "../assets/images/char1.png";
import char2 from "../assets/images/char2.png";
import char3 from "../assets/images/char3.png";
import char4 from "../assets/images/char4.png";

const FinalDebatePage = () => {
  
  // 채팅 메세지 더미
  const [messages, setMessages] = useState([
    { senderId: 1, name: "산책하는 노루", avatar: char1, message: "억울해요" },
    { senderId: 2, name: "흥청망청 코끼리", avatar: char2, message: "저는 진짜 진짜 진짜 아니에요" },
    { senderId: 3, name: "물먹는 버섯", avatar: char3, message: "햄부기햄북 햄북어 햄북스딱스 함부르크햄부가우가 햄비기햄부거 햄부가티햄부기온앤 온 을 차려오거라  햄부기햄북 햄북어 햄북스딱스 함부르크햄부가우가 햄비기햄부거 햄부가티햄부기온앤 온을 차려오라고 하지않앗느냐." },
  ]);

  const userId = 99;

  const [message, setMessage] = useState(""); 
  const [isMuted, setIsMuted] = useState(false); // 도배 제재 
  const [warningMsg, setWarningMsg] = useState(false); // 도배 경고 메세지
  const sendHistory = useRef([]); // 입력 시간 기록

  const handleInputChange = (e) => {
    if (isMuted) return; // 도배 제재 시 입력 불가

    let text = e.target.value;
    if (text.length > 100) { // 100자 제한
      text = text.slice(0, 100);
    }
    setMessage(text);
  };

  
  const handleSendMessage = () => {
    if (!isMuted && message.trim() !== "") {
      setMessages((prev) => [
        ...prev,
        { senderId: userId, name: "노래하는 달팽이", avatar: char4, message: message.trim() },
      ]);
      setMessage(""); // 메세지 전송 후 입력창 초기화
      
      // 현재 시간 기록
      const now = Date.now();
      sendHistory.current.push(now);
      
      // 2초 내 6번 이상 전송 감지
      sendHistory.current = sendHistory.current.filter(
        (time) => now - time <= 2000
      );
      
      if (sendHistory.current.length >= 6) {
        triggerMute();
      }
    }
  };
  
  const triggerMute = () => {
    setIsMuted(true);
    setWarningMsg(true);

    // 10초 후 도배 제재 해제
    setTimeout(() => {
      setIsMuted(false);
      setWarningMsg(false);
      sendHistory.current = []; // 입력 기록 초기화
    }, 10000);
  };
  
  return (
    <PageContainer>
      <SectionContainer>
        <HeaderContainer>
          <Title>최후 변론</Title>
          <Timer>30</Timer>
        </HeaderContainer>

        <ChatContainer>
          {messages.map((message, index) => (
            <ChatBubble key={index} myChat={message.senderId === userId}>
              {message.senderId !== userId && (
                <>
                  <Character src={message.avatar} alt={message.name} />
                  <PlayerInfo>
                    <Nickname>{message.name}</Nickname>
                    <Message myChat={message.senderId === userId}>
                      {message.message}
                    </Message>
                  </PlayerInfo>
                </>
              )}

              {message.senderId === userId && (
                <Message myChat={true}>{message.message}</Message>
              )}
            </ChatBubble>
          ))}
        </ChatContainer>

        {warningMsg && <WarningMsg>도배 감지로 인해 10초간 채팅이 제한됩니다.</WarningMsg>}

        <ChatInputContainer>
          <ChatInput 
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder={isMuted ? "도배 감지로 인해 입력이 제한됩니다." : "메세지를 입력하세요."}
            disabled={isMuted}
          />
          <SendButton onClick={handleSendMessage} disabled={isMuted}>전송</SendButton>
        </ChatInputContainer>
      </SectionContainer>
    </PageContainer>
  );
};

export default FinalDebatePage;

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

const HeaderContainer = styled.div`
    flex: 0;
    font-weight: 700;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 3vh;
`;

const Timer = styled.div`
    margin-top: 2.5vh;
    font-size: 4vh;
    line-height: 5vh;
    color: #000000;
`;

const ChatContainer = styled.div`
    flex: 1;
    display: flex;
    overflow-y: auto; /* 스크롤바 표시 */
    flex-direction: column;
    gap: 3vh;
    padding: 1.5vh;
`;

const ChatBubble = styled.div`
    display: flex;
    flex-direction: ${({ myChat }) => (myChat ? "row-reverse" : "row")};
    align-items: flex-start;
    gap: 2vh;
`;

const PlayerInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Character = styled.img`
    width: 7vh;
    height: 7vh;
`;

const Nickname = styled.div`
    font-size: 1.7vh;
    font-weight: 500;
    margin-bottom: 0.7vh;
`;

const Message = styled.div`
    padding: 8px 15px;
    background-color: ${({ myChat }) => (myChat ? "#1768FF" : "#f1f1f1")};
    color: ${({ myChat }) => (myChat ? "#ffffff" : "#000000")};
    font-size: 2.2vh;
    font-weight: 600;
    border-radius: 1vh;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: ${({ myChat }) => (myChat ? "right" : "left")};
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
    cursor: text;
`;

const SendButton = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 2vh;
    background-color: ${({ disabled }) => (disabled ? "#ddd" : "#3498db")};
    color: ${({ disabled }) => (disabled ? "#aaa" : "#ffffff")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    
    &:hover {
        background-color: ${({ disabled }) => (disabled ? "#ddd" : "#2980b9")};
    }
`;

const WarningMsg = styled.p`
    color: red;
    font-size: 1.7vh;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
`;