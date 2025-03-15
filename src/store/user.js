import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: {
    username: '',
    profileImageUrl: '',
    email: '',
  },
  setUser: (newUser) =>
    set((state) => ({
      user: { ...state.user, ...newUser },
    })),
}));

export default useUserStore;
