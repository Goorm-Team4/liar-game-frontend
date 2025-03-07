import { create } from "zustand";
import { Client } from "@stomp/stompjs";

const SOCKET_URL = "ws://43.201.26.110:8080/ws-connect";

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

                client.subscribe('/topic/chat', (message) => {
                    set((state) => ({ messages: [...state.messages, JSON.parse(message.body)] }));
                });
            },
            onStompError: (error) => {
                console.error("(-) 웹소켓 오류 발생: ", error);
                set({ isConnected: false });
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