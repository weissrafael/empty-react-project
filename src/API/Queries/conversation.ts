import { useQuery } from '@tanstack/react-query';

import { axiosRequest } from 'API/axiosInstance';
import { QueryKeys } from 'API/QueryKeys';
import {
  ConversationsResponseResource,
  ConversationResponseResource,
} from 'Models/ConversationResource';

import { useLoggedUser } from '../../Stores/loggedUser';

export const useFetchConversations = () => {
  const { loggedUser } = useLoggedUser((state) => state);
  return useQuery(
    [QueryKeys.conversationList],
    async () => {
      const response = await axiosRequest.get<ConversationsResponseResource>(
        `/user/${loggedUser.id}/conversation`
      );
      return response.data;
    },
    { refetchOnWindowFocus: false, refetchInterval: 5000 }
  );
};

export const useFetchConversation = (id: string) => {
  const { loggedUser } = useLoggedUser((state) => state);
  return useQuery([QueryKeys.conversation + id], async () => {
    const response = await axiosRequest.get<ConversationResponseResource>(
      `/user/${loggedUser.id}/conversation/${id}`
    );
    return response.data;
  });
};
