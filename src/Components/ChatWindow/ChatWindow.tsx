import React, { useEffect, useRef } from 'react';

import { MessageResource } from '../../Models/MessageResource';
import { useChatStore } from '../../Stores/chat';
import Message from '../Message/Message';
import MessageLoader from '../MessageLoader/Message';

import { ChatBody } from './styles';

interface Props {
  messages?: MessageResource[];
  userId?: string;
}

export default function ChatWindow({ messages, userId }: Props) {
  const bottomRef = useRef<any>(null);
  const chatIsLoading = useChatStore((state) => state.chatIsLoading);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatIsLoading]);

  return (
    <ChatBody>
      {messages?.map((message) => {
        return <Message key={message.id} message={message} userId={userId} />;
      })}
      {chatIsLoading && <MessageLoader />}
      <div ref={bottomRef} />
    </ChatBody>
  );
}
