import { create } from 'zustand';

export const useStepStore = create((set) => ({
  step: 0,
  nextStep: () =>
    set((prevState) => ({ step: Math.min(prevState.step + 1, 6) })),
  prevStep: () =>
    set((prevState) => ({ step: Math.max(prevState.step - 1, 0) })),
}));
