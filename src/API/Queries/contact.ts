import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from 'API/QueryKeys';
import { ContactApiResource } from 'Models/ContactResource';

// import { axiosRequest } from 'API/axiosInstance';

const mockResponseList: ContactApiResource[] = [
  {
    id: 9,
    name: 'wessel',
    last_seen_at: '2023-07-21T08:07:37.000000Z',
  },
  {
    id: 8,
    name: 'nick',
    last_seen_at: '2023-06-17T16:06:11.000000Z',
  },
  {
    id: 7,
    name: 'mdemaa',
    last_seen_at: '2023-07-03T06:06:11.000000Z',
  },
  {
    id: 6,
    name: 'jordy',
    last_seen_at: '2021-06-24T10:06:11.000000Z',
  },
  {
    id: 5,
    name: 'jesper',
    last_seen_at: '2021-07-19T08:06:11.000000Z',
  },
  {
    id: 4,
    name: 'hilco',
    last_seen_at: '2021-06-15T01:06:11.000000Z',
  },
  {
    id: 3,
    name: 'bram',
    last_seen_at: '2021-07-20T12:06:11.000000Z',
  },
  {
    id: 2,
    name: 'andre',
    last_seen_at: '2021-06-27T22:06:11.000000Z',
  },
  {
    id: 1,
    name: 'ali',
    last_seen_at: '2023-07-21T08:06:54.000000Z',
  },
];

const mockResponseSingle: ContactApiResource = {
  id: 9,
  name: 'wessel',
  last_seen_at: '2023-07-21T08:07:37.000000Z',
};

export const useFetchContacts = () => {
  return useQuery([QueryKeys.contactList], async () => {
    // const response = await axiosRequest.get<ContactApiResource[]>(`/user`);
    // return response.data;
    return mockResponseList;
  });
};

export const useFetchContact = (id: string) => {
  return useQuery([QueryKeys.contact + id], async () => {
    // const response = await axiosRequest.get<ContactApiResource>(`/user/${id}`);
    // return response.data;
    return mockResponseSingle;
  });
};
