import { create } from 'zustand';

import { ContactResource } from '../Models/ContactResource';

export interface ChatStoreResource {
  selectedUser: ContactResource;
  selectUser: (user: ContactResource) => void;
}

export const useChatStore = create<ChatStoreResource>((set) => ({
  selectedUser: { id: 1, name: '', lastSeenAt: '' },
  selectUser: (user: ContactResource) => set(() => ({ selectedUser: user })),
}));
