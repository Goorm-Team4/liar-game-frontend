import { create } from 'zustand';

export const useStepStore = create((set) => ({
  step: 0,
  nextStep: () =>
    set((prevState) => ({ step: Math.min(prevState.step + 1, 6) })),
  resetStep: () => set(() => ({ step: 0 })),
}));
