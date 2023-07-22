import React from 'react';
import { useParams } from 'react-router-dom';

import ChatWindow from '../Components/ChatWindow/ChatWindow';
import useMessages from '../Hooks/useMessages';

function Chat() {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: dataFromApi,
    isFetching,
  } = useMessages.useGetMessage(id || '');

  return <ChatWindow userId={id} messages={dataFromApi} />;
}

export default React.memo(Chat);
