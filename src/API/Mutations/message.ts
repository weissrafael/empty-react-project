import { axiosRequest } from 'API/axiosInstance';

import { SingleMessageResponseResource } from '../../Models/MessageResource';
import { mockedLoggedUser } from '../mockedLoggedUser';

export const createMessage = async (conversationId: number, text: string) => {
  const response = await axiosRequest.post<SingleMessageResponseResource>(
    `/user/${mockedLoggedUser.id}/conversation/${conversationId}/message`,
    {
      text,
    }
  );
  return response.data;
};
