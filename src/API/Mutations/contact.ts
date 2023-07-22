import { axiosRequest } from 'API/axiosInstance';

export interface ArchiveContactRequest {
  is_archived: boolean;
}

export const patchArchiveContact = async (
  request: ArchiveContactRequest,
  id: string
) => {
  const response = await axiosRequest.patch<string>(`/contacts/${id}`, request);
  return response.data;
};
