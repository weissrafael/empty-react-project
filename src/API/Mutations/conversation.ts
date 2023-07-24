import { axiosRequest } from 'API/axiosInstance';

import { ConversationResponseResource } from '../../Models/ConversationResource';

export const createConversation = async (
  userIds: number[],
  name: string,
  id: number | string
) => {
  const response = await axiosRequest.post<ConversationResponseResource>(
    `/user/${id}/conversation`,
    {
      user_ids: userIds,
      name,
    }
  );
  return response.data;
};
