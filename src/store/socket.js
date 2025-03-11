import { create } from "zustand";
import { Client } from "@stomp/stompjs";
import { useModalStore } from "@/store/modal";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

export const useWebSocketStore = create((set, get) => ({
    stompClient: null,
    messages: [],
    isConnected: false,

    // 웹소켓 연결
    connectWebSocket: () => {
        if (get().stompClient) return; // 이미 연결되어 있으면 중복 실행 방지

        const client = new Client({
            brokerURL: SOCKET_URL,
            reconnectDelay: 5000, // 자동 재연결 5초
            onConnect: () => {
                console.log("(+) 웹소켓 연결 성공");
                set({ isConnected: true });

                const gameId = localStorage.getItem("gameId"); // 현재 게임 ID 저장된 값 사용

                // 게임 정답 판별 여부 수신
                client.subscribe(`/sub/games/${gameId}/result`, (message) => {
                    const parsedMessage = JSON.parse(message.body);
                    set((state) => ({ messages: [...state.messages, { type: "LIAR_RESULT", ...parsedMessage }] }));
                });
        
                // 최후 변론 메시지 수신
                client.subscribe(`/sub/games/${gameId}/chat/final`, (message) => {
                    const parsedMessage = JSON.parse(message.body);
                    set((state) => ({ messages: [...state.messages, { type: "FINAL_CHAT", ...parsedMessage }] }));
                });
        
                // 유저 턴 메시지 수신
                client.subscribe(`/sub/games/${gameId}/chat/turn`, (message) => {
                    const parsedMessage = JSON.parse(message.body);
                    set((state) => ({ messages: [...state.messages, { type: "TURN_CHAT", ...parsedMessage }] }));
                });
            },

            // stomp 프로토콜 내부 오류 발생 시
            onStompError: (error) => {
                console.error("(-) STOMP 프로토콜 오류 발생: ", error);
                set({ isConnected: false });

                const { openModal } = useModalStore.getState();
                openModal("gameInterrupt", {
                    onRetry: () => window.location.href = "/game",
                    onHome: () => window.location.href = "/",
                });
            },

            // 브라우저 레벨의 웹소켓 연결 끊겼을 때
            onWebSocketClose: () => {
                console.warn("(-) 웹소켓 연결 끊김 감지");
                set({ isConnected: false });

                const { openModal } = useModalStore.getState();
                openModal("gameInterrupt", {
                onRetry: () => window.location.href = "/game",
                onHome: () => window.location.href = "/",
                });
            },
        });

        client.activate();
        set({ stompClient: client });
    },

    // 웹소켓 메세지 전송
    sendMessage: (destination, message) => {
        const { stompClient } = get();
        if (stompClient && stompClient.connected) {
            stompClient.publish({
                destination,
                body: JSON.stringify(message),
            });
        } else {
            console.error("(-) 웹소켓 연결되지 않음");
        }
    },

    // 웹소켓 연결 해제
    disconnectWebSocket: () => {
        const { stompClient } = get();
        if (stompClient) {
            stompClient.deactivate();
            set({ stompClient: null, isConnected: false });
            console.log("(+) 웹소켓 연결 해제");
        } 
    },
}));