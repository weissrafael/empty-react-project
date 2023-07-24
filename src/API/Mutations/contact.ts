import { axiosRequest } from 'API/axiosInstance';

import { mockedLoggedUser } from '../mockedLoggedUser';

export const createConversation = async (userIds: number[], name: string) => {
  const response = await axiosRequest.post<string>(
    `/user/${mockedLoggedUser.id}/conversation`,
    {
      user_ids: userIds,
      name,
    }
  );
  return response.data;
};
