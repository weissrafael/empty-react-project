import { useQuery } from '@tanstack/react-query';

import { axiosRequest } from 'API/axiosInstance';
import { QueryKeys } from 'API/QueryKeys';
import {
  ConversationsResponseResource,
  SingleConversationApiResource,
} from 'Models/ConversationsResource';

import { mockedLoggedUser } from '../mockedLoggedUser';

const { id } = mockedLoggedUser;

export const useFetchConversations = () => {
  return useQuery([QueryKeys.conversationList], async () => {
    const response = await axiosRequest.get<ConversationsResponseResource>(
      `/user/${id}/conversation`
    );
    return response.data;
  });
};

export const useFetchConversation = (id: string) => {
  return useQuery([QueryKeys.conversation + id], async () => {
    const response = await axiosRequest.get<SingleConversationApiResource>(
      `/user/${id}`
    );
    return response.data;
  });
};
