import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChatWindow from '../Components/ChatWindow/ChatWindow';
import useMessages from '../Hooks/useMessages';
import { useChatStore } from '../Stores/chat';

function Chat() {
  const { id } = useParams();
  const { data: dataFromApi } = useMessages.useGetMessage(id || '');
  const selectedConversation = useChatStore(
    (state) => state.selectedConversation
  );

  return (
    <ChatWindow members={selectedConversation.members} messages={dataFromApi} />
  );
}

export default React.memo(Chat);
