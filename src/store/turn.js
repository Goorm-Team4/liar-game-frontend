import { create } from 'zustand';

export const useTurnStore = create((set) => ({
  turn: 0,
  players: [], // 플레이어 수를 저장
  setPlayers: (players) => set({ players }), // 플레이어 수 설정
  incrementTurn: () => set((state) => ({ turn: state.turn + 1 })),
}));
