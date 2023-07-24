import { axiosRequest } from 'API/axiosInstance';

import { ConversationResponseResource } from '../../Models/ConversationResource';
import { mockedLoggedUser } from '../mockedLoggedUser';

export const createConversation = async (userIds: number[], name: string) => {
  const response = await axiosRequest.post<ConversationResponseResource>(
    `/user/${mockedLoggedUser.id}/conversation`,
    {
      user_ids: userIds,
      name,
    }
  );
  return response.data;
};
