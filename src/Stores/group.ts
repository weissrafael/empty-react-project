import { create } from 'zustand';

import { ContactResource } from '../Models/ContactResource';

export interface ChatGroupResource {
  isGroupMode: boolean;
  setIsGroupMode: (isLoading: boolean) => void;
  selectedUsers: ContactResource[];
  addUser: (user: ContactResource) => void;
}

export const useGroupStore = create<ChatGroupResource>((set) => ({
  isGroupMode: false,
  selectedUsers: [],
  addUser: (user: ContactResource) =>
    set((state) => ({ selectedUsers: [...state.selectedUsers, user] })),
  setIsGroupMode: (isGroupMode: boolean) => set(() => ({ isGroupMode })),
}));
