import { create } from 'zustand';

export const useStepStore = create((set) => ({
  step: 0,
  nextStep: () => set((prevState) => ({ step: prevState.step + 1 })),
  prevStep: () => set((prevState) => ({ step: prevState.step - 1 })),
}));
