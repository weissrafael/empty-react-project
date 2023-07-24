import { axiosRequest } from 'API/axiosInstance';

import { mockedLoggedUser } from '../mockedLoggedUser';

export const createConversation = async (userIds: number[]) => {
  const response = await axiosRequest.post<string>(
    `/user/${mockedLoggedUser.id}/conversation`,
    {
      user_ids: userIds,
    }
  );
  return response.data;
};
