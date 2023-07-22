import React from 'react';

import { MessageResource } from '../../Models/MessageResource';
import Message from '../Message/Message';

import { ChatBody } from './styles';

interface Props {
  messages?: MessageResource[];
  userId?: string;
}

export default function ChatWindow({ messages, userId }: Props) {
  return (
    <ChatBody>
      {messages?.map((message) => {
        return <Message key={message.id} message={message} userId={userId} />;
      })}
    </ChatBody>
  );
}
