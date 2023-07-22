import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from 'API/QueryKeys';

import { MessageApiResource } from '../../Models/MessageResource';

// import { axiosRequest } from 'API/axiosInstance';

const mockResponse: MessageApiResource[] = [
  {
    id: 23,
    user_id: 111,
    text: 'Hello',
    sent_at: '2023-07-21T08:08:51.000000Z',
  },
  {
    id: 24,
    user_id: 9,
    text: 'Hi!',
    sent_at: '2023-07-21T08:09:51.000000Z',
  },
  {
    id: 25,
    user_id: 9,
    text: 'How you doing?',
    sent_at: '2023-07-21T08:10:51.000000Z',
  },
  {
    id: 26,
    user_id: 111,
    text: 'Im doing great! I was about to ask you something, but now I really need a big message to see how it looks like',
    sent_at: '2023-07-21T08:11:51.000000Z',
  },
  {
    id: 27,
    user_id: 9,
    text: 'Oh ok dont worry, please take your time.',
    sent_at: '2023-07-21T08:12:51.000000Z',
  },
  {
    id: 28,
    user_id: 9,
    text: 'Any updates?',
    sent_at: '2023-07-21T09:08:51.000000Z',
  },
];

export const useFetchMessage = (id: string) => {
  return useQuery([QueryKeys.contact + id], async () => {
    // const response = await axiosRequest.get<ContactApiResource[]>(`/user`);
    // return response.data;
    return mockResponse;
  });
};
