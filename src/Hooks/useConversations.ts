import { useEffect, useState } from 'react';

import { useFetchConversations } from 'API/Queries/conversation';

import { formatConversations } from '../Mappers/ConversationMapper';
import { ConversationResource } from '../Models/ConversationResource';

const useGetConversations = () => {
  const { data, isLoading, isError } = useFetchConversations();

  const [formattedData, setFormattedData] = useState<ConversationResource[]>(
    []
  );

  function compareDates(a: ConversationResource, b: ConversationResource) {
    const dateA = new Date(a.lastSeenAt);
    const dateB = new Date(b.lastSeenAt);
    return dateB.getTime() - dateA.getTime();
  }

  useEffect(() => {
    if (data) {
      const newData = formatConversations(data);
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

export default { useGetConversations };