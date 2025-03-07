import { create } from 'zustand';

const useGameStore = create((set) => ({
  isIngame: false,
  startGame: () => set({ isIngame: true }),
}));

export default useGameStore;
