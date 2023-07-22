import React from 'react';

import { MessageResource } from '../../Models/MessageResource';

import { ChatBody } from './styles';

interface Props {
  messages?: MessageResource[];
}

export default function ChatWindow({ messages }: Props) {
  return (
    <ChatBody>
      {messages?.map((message) => {
        return <div key={message.id}>{message.text}</div>;
      })}
    </ChatBody>
  );
}
