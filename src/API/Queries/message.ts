import { useQuery } from '@tanstack/react-query';

import { axiosRequest } from 'API/axiosInstance';
import { QueryKeys } from 'API/QueryKeys';

import { MessageResponseResource } from '../../Models/MessageResource';
import { useLoggedUser } from '../../Stores/loggedUser';

export const useFetchMessage = (id: string | number) => {
  const { loggedUser } = useLoggedUser((state) => state);

  return useQuery(
    [QueryKeys.messages + id],
    async () => {
      const response = await axiosRequest.get<MessageResponseResource>(
        `/user/${loggedUser.id}/conversation/${id}/message`
      );
      return response.data;
    },
    {
      refetchInterval: 5000,
    }
  );
};
