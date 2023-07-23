import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChatWindow from '../Components/ChatWindow/ChatWindow';
import useMessages from '../Hooks/useMessages';
import { useChatStore } from '../Stores/chat';

function Group() {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: dataFromApi,
    isFetching,
  } = useMessages.useGetMessage(id || '');

  const { messages, addMessages } = useChatStore((state) => state);

  useEffect(() => {
    if (dataFromApi && messages.length === 0) {
      addMessages(dataFromApi);
    }
  }, [addMessages, dataFromApi]);

  return <ChatWindow userId={id} messages={messages} />;
}

export default React.memo(Group);
