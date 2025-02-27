// import React, { useState } from 'react';
// import styled from 'styled-components';

// const ChatInput = ({ onSendMessage, onTyping, disabled, placeholder }) => {
//     const [message, setMessage] = useState("");
//     const [isComposing, setIsComposing] = useState(false); // 중복 전송 방지

//     const handleInputChange = (e) => {
//         if (disabled) return;

//         let text = e.target.value;
//         if (text.length > 100) {
//           text = text.slice(0, 100); // 100자 제한
//         }
//         setMessage(text);
//         if (onTyping) onTyping(text);
//     };

//     // 메시지 전송 핸들러
//     const handleSendMessage = () => {
//         if (!disabled && message.trim() !== "") {
//             onSendMessage(message.trim()); // 메세지 전송
//             setMessage("");
//             if (onTyping) onTyping("");
//         }
//     };

//     // 엔터 키 입력 핸들러
//     const handleKeyPress = (e) => {
//         if (isComposing) return; // 글자 조합 중일 때

//         if (e.key === "Enter") {
//             handleSendMessage();
//         }
//     };

//     return (
//         <ChatInputContainer>
//             <ChatInputarea
//                 type="text"
//                 value={message}
//                 onChange={handleInputChange}
//                 onCompositionStart={() => setIsComposing(true)}
//                 onCompositionEnd={() => setIsComposing(false)}
//                 onKeyDown={handleKeyPress}
//                 placeholder={placeholder}
//                 disabled={disabled}
//             />
//             <SendButton
//                 onClick={handleSendMessage}
//                 disabled={disabled}
//             >
//                 전송
//             </SendButton>
//         </ChatInputContainer>
//     );
// };

// export default ChatInput;

// const ChatInputContainer = styled.div`
//     flex: 0;
//     display: flex;
//     gap: 1vh;
// `;

// const ChatInputarea = styled.input`
//     flex: 1;
//     padding: 8px 12px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     font-size: 2vh;
//     cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

//     &::placeholder {
//         color: ${({ disabled }) => (disabled ? "#aaa" : "#888")};
//     }
// `;

// const SendButton = styled.button`
//     padding: 8px 16px;
//     border: none;
//     border-radius: 4px;
//     font-size: 2vh;
//     background-color: ${({ disabled }) => (disabled ? "#ddd" : "#3498db")};
//     color: ${({ disabled }) => (disabled ? "#aaa" : "#ffffff")};
//     cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

//     &:hover {
//         background-color: ${({ disabled }) => (disabled ? "#ddd" : "#2980b9")};
//     }
// `;
