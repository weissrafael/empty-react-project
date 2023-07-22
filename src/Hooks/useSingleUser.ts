import { useEffect, useState } from 'react';

import { useFetchContact } from 'API/Queries/contact';

import { formatContact } from '../Mappers/ContactMapper';
import { ContactResource } from '../Models/ContactResource';

const useGetSingleUser = (id: string) => {
  const { data, isLoading, isError } = useFetchContact(id);

  const [formattedUser, setFormattedUser] = useState<ContactResource>({
    id: 1,
    name: '',
    lastSeenAt: '',
  });

  useEffect(() => {
    if (data) {
      setFormattedUser(formatContact(data));
    }
  }, [data]);

  return {
    isLoading,
    isError,
    lastSeenAt: formattedUser.lastSeenAt,
    name: formattedUser.name,
  };
};

export default { useGetSingleUser };
