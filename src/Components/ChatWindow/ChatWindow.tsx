import React, { useEffect, useRef } from 'react';

import { MessageResource } from '../../Models/MessageResource';
import Message from '../Message/Message';

import { ChatBody } from './styles';

interface Props {
  messages?: MessageResource[];
  userId?: string;
}

export default function ChatWindow({ messages, userId }: Props) {
  const bottomRef = useRef<any>(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ChatBody>
      {messages?.map((message) => {
        return <Message key={message.id} message={message} userId={userId} />;
      })}
      <div ref={bottomRef} />
    </ChatBody>
  );
}
