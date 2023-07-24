import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChatWindow from '../Components/ChatWindow/ChatWindow';
import FullScreenLoader from '../Components/FullscreenLoader/FullScreenLoader';
import useConversations from '../Hooks/useConversations';
import useMessages from '../Hooks/useMessages';
import { useChatStore } from '../Stores/chat';

function Chat() {
  const { id } = useParams();
  const { data: dataFromApi } = useMessages.useGetMessage(id || '');
  const { data, isLoading } = useConversations.useGetSingleConversation(
    id || ''
  );
  console.log(data);
  const { setChatIsLoading, setSelectedConversation } = useChatStore(
    (state) => state
  );

  useEffect(() => {
    setChatIsLoading(false);
  }, [dataFromApi, setChatIsLoading]);

  useEffect(() => {
    if (data.id) setSelectedConversation(data);
  }, [data, setSelectedConversation]);

  return (
    <>
      <FullScreenLoader isLoading={isLoading} />
      <ChatWindow members={data.members} messages={dataFromApi} />
    </>
  );
}

export default React.memo(Chat);
