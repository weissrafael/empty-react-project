import { create } from 'zustand';

import { ContactResource } from '../Models/ContactResource';

export interface ChatGroupResource {
  isGroupMode: boolean;
  setIsGroupMode: (isLoading: boolean) => void;
  selectedUsers: ContactResource[];
  addUser: (user: ContactResource) => void;
  removeUser: (user: ContactResource) => void;
}

export const useGroupStore = create<ChatGroupResource>((set) => ({
  isGroupMode: false,
  selectedUsers: [],
  removeUser: (user: ContactResource) => {
    set((state) => ({
      selectedUsers: state.selectedUsers.filter((u) => u.id !== user.id),
    }));
  },
  addUser: (user: ContactResource) =>
    set((state) => ({ selectedUsers: [...state.selectedUsers, user] })),
  setIsGroupMode: (isGroupMode: boolean) => set(() => ({ isGroupMode })),
}));
