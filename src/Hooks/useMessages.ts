import { useEffect, useState } from 'react';

import { useFetchMessage } from '../API/Queries/message';
import { formatMessages } from '../Mappers/MessageMapper';
import { MessageResource } from '../Models/MessageResource';

const useGetMessage = (id: string) => {
  const { data, isLoading, isError, refetch, isFetching } = useFetchMessage(id);

  const [formattedData, setFormattedData] = useState<MessageResource[]>([]);

  function compareDates(a: MessageResource, b: MessageResource) {
    const dateA = new Date(a.sentAt);
    const dateB = new Date(b.sentAt);
    return dateA.getTime() - dateB.getTime();
  }

  useEffect(() => {
    if (data) {
      const newData = formatMessages(data.data);
      newData.sort(compareDates);
      setFormattedData(newData);
    }
  }, [data]);

  return {
    isLoading,
    isError,
    data: formattedData,
    isFetching,
    refetch,
  };
};

export default { useGetMessage };
