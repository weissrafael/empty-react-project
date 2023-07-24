import { useQuery } from '@tanstack/react-query';

import { axiosRequest } from 'API/axiosInstance';
import { QueryKeys } from 'API/QueryKeys';

import { MessageApiResource } from '../../Models/MessageResource';
import { mockedLoggedUser } from '../mockedLoggedUser';

export const useFetchMessage = (id: string) => {
  return useQuery([QueryKeys.messages + id], async () => {
    const response = await axiosRequest.get<MessageApiResource[]>(
      `/user/${mockedLoggedUser.id}/conversation/${id}/message`
    );
    return response.data;
  });
};
