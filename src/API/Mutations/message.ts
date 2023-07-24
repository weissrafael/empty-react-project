import { axiosRequest } from 'API/axiosInstance';
import { SingleMessageResponseResource } from 'Models/MessageResource';

export const createMessage = async (
  conversationId: number,
  text: string,
  id: string | number
) => {
  const response = await axiosRequest.post<SingleMessageResponseResource>(
    `/user/${id}/conversation/${conversationId}/message`,
    {
      text,
    }
  );
  return response.data;
};
