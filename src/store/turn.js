import { create } from 'zustand';

export const useTurnStore = create((set) => ({
  turn: 0,
  playerCount: 0,
  players: [],
  isPlaying: false,
  incrementTurn: () => set((prevState) => ({ turn: prevState.turn + 1 })),
  resetTurn: () => set({ turn: 0 }),
  setPlayerCount: (count) => set({ playerCount: count }),
  setPlayers: (players) => set({ players }),
  startTurn: () => set({ isPlaying: true }),
  endTurn: () => set({ isPlaying: false }),
}));
