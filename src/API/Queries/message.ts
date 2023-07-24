import { useQuery } from '@tanstack/react-query';

import { axiosRequest } from 'API/axiosInstance';
import { QueryKeys } from 'API/QueryKeys';

import { MessageResponseResource } from '../../Models/MessageResource';
import { mockedLoggedUser } from '../mockedLoggedUser';

export const useFetchMessage = (id: string | number) => {
  return useQuery(
    [QueryKeys.messages + id],
    async () => {
      const response = await axiosRequest.get<MessageResponseResource>(
        `/user/${mockedLoggedUser.id}/conversation/${id}/message`
      );
      return response.data;
    },
    {
      refetchInterval: 5000,
    }
  );
};
