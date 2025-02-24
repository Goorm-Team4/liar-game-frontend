import { useWebSocketStore } from '@/store/socket';

export const createGame = (callback) => {
  const { sendMessage, stompClient, connectWebSocket, isConnected } =
    useWebSocketStore.getState();

  if (!isConnected) {
    console.log('⚠️ 웹소켓이 연결되지 않아, 먼저 연결을 시도합니다.');
    connectWebSocket();

    const interval = setInterval(() => {
      if (useWebSocketStore.getState().isConnected) {
        clearInterval(interval);
        sendGameCreateRequest(callback);
      }
    }, 500);
  } else {
    sendGameCreateRequest(callback);
  }
};

const sendGameCreateRequest = (callback) => {
  const { sendMessage, stompClient } = useWebSocketStore.getState();

  if (!stompClient || !stompClient.connected) {
    console.error('(-) 웹소켓이 여전히 연결되지 않음.');
    return;
  }

  console.log('(+) 웹소켓이 연결됨. 게임 생성 요청을 보냄.');
  sendMessage('/pub/api/v1/games/create', {});

  const subscription = stompClient.subscribe(
    '/sub/api/v1/games/create',
    (message) => {
      const gameData = JSON.parse(message.body);
      console.log('(+) 게임 생성 완료: ', gameData);

      localStorage.setItem('gameId', gameData.gameId);

      if (callback) callback(gameData);

      subscription.unsubscribe();
    }
  );
};
