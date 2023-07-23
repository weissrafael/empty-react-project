import { create } from 'zustand';

export interface ChatGroupResource {
  isGroupMode: boolean;
  setIsGroupMode: (isLoading: boolean) => void;
}

export const useGroupStore = create<ChatGroupResource>((set) => ({
  isGroupMode: false,
  setIsGroupMode: (isGroupMode: boolean) => set(() => ({ isGroupMode })),
}));
