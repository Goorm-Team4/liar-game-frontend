import { create } from "zustand";

export const useModalStore = create((set) => ({
    modalType: null,
    modalProps: {},
    isOpen: false,

    openModal: (type, props = {}) =>
        set({ modalType: type, modalProps: props, isOpen: true }),

    closeModal: () => 
        set({ modalType: null, modalProps: {}, isOpen: false }),
}));