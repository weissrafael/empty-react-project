import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChatWindow from '../Components/ChatWindow/ChatWindow';
import useConversations from '../Hooks/useConversations';
import useMessages from '../Hooks/useMessages';
import { useChatStore } from '../Stores/chat';

function Chat() {
  const { id } = useParams();
  const { data: dataFromApi } = useMessages.useGetMessage(id || '');
  const { data: conversationData } = useConversations.useGetSingleConversation(
    id || ''
  );

  const { messages, addMessages } = useChatStore((state) => state);

  useEffect(() => {
    if (dataFromApi && messages.length === 0) {
      addMessages(dataFromApi);
    }
  }, [addMessages, dataFromApi]);

  return <ChatWindow members={conversationData?.members} messages={messages} />;
}

export default React.memo(Chat);
