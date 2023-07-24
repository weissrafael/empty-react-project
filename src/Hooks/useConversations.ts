import { useEffect, useState } from 'react';

import {
  useFetchConversation,
  useFetchConversations,
} from 'API/Queries/conversation';

import {
  conversationApiToFrontResource,
  formatConversations,
} from '../Mappers/ConversationMapper';
import { ConversationResource } from '../Models/ConversationResource';

const useGetConversations = () => {
  const { data, isLoading, isError, isFetching } = useFetchConversations();

  const [formattedData, setFormattedData] = useState<ConversationResource[]>(
    []
  );

  // function compareDates(a: ConversationResource, b: ConversationResource) {
  //   const dateA = new Date(a.lastSeenAt);
  //   const dateB = new Date(b.lastSeenAt);
  //   return dateB.getTime() - dateA.getTime();
  // }

  useEffect(() => {
    if (data) {
      const newData = formatConversations(data.data);
      // newData.sort(compareDates);
      setFormattedData(newData);
    }
  }, [data]);

  return {
    isLoading,
    isError,
    isFetching,
    data: formattedData,
  };
};

const useGetSingleConversation = (id: string) => {
  const { data, isLoading, isError } = useFetchConversation(id);

  const [formattedData, setFormattedData] = useState<ConversationResource>(
    {} as ConversationResource
  );

  useEffect(() => {
    if (data) {
      setFormattedData(conversationApiToFrontResource(data.data));
    }
  }, [data]);

  return {
    isLoading,
    isError,
    data: formattedData,
  };
};

export default { useGetConversations, useGetSingleConversation };
