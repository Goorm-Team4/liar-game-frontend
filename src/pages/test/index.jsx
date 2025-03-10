import styled from 'styled-components';
import { useWebSocketStore } from '@/store/socket';
import { useEffect } from 'react';

const test = () => {
  const stompClient = useWebSocketStore((state) => state.stompClient);
  const connectWebSocket = useWebSocketStore((state) => state.connectWebSocket);

  useEffect(() => {
    connectWebSocket();
  }, [connectWebSocket]);

  const handleDisconnect = () => {
    if (stompClient) {
      stompClient.deactivate();
      console.log("stompClient 연결 강제 종료");
    } else {
      console.log("stompClient가 연결되지 않음");
    }
  };

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <button onClick={handleDisconnect}>웹소켓 끊기</button>
    </div>
  );
};

export default test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
`;
