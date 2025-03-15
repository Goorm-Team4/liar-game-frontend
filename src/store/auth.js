import { create } from 'zustand';

const useAuthStore = create((set) => ({
  accessToken: localStorage.getItem("accessToken") || "",

  login: (token) => {
    localStorage.setItem("accessToken", token);
    set({ accessToken: token });

    console.log(`로그인 토큰 저장 : ${token}`)
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    set({ accessToken: "" });
  },
}));

export default useAuthStore;