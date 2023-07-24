import { useQuery } from '@tanstack/react-query';

import { axiosRequest } from 'API/axiosInstance';
import { QueryKeys } from 'API/QueryKeys';
import {
  ContactApiResource,
  ContactResponseResource,
} from 'Models/ContactResource';

export const useFetchContacts = () => {
  return useQuery([QueryKeys.contactList], async () => {
    const response = await axiosRequest.get<ContactResponseResource>(`/user`);
    return response.data;
  });
};

export const useFetchContact = (id: string) => {
  return useQuery([QueryKeys.contact + id], async () => {
    const response = await axiosRequest.get<ContactApiResource>(`/user/${id}`);
    return response.data;
  });
};
