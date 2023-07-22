import { useEffect, useState } from 'react';

import { useFetchContacts } from 'API/Queries/contact';

import { formatContacts } from '../Mappers/ContactMapper';
import { ContactResource } from '../Models/ContactResource';

const useGetContacts = () => {
  const { data, isLoading, isError } = useFetchContacts();

  const [formattedData, setFormattedData] = useState<ContactResource[]>([]);

  function compareDates(a: ContactResource, b: ContactResource) {
    const dateA = new Date(a.lastSeenAt);
    const dateB = new Date(b.lastSeenAt);
    return dateB.getTime() - dateA.getTime();
  }

  useEffect(() => {
    if (data) {
      const newData = formatContacts(data);
      newData.sort(compareDates);
      setFormattedData(newData);
    }
  }, [data]);

  return {
    isLoading,
    isError,
    data: formattedData,
  };
};

export default { useGetContacts };
