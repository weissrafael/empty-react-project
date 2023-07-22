import React from 'react';

import { MessageResource } from '../../Models/MessageResource';

import { MessageBody, MessageContent } from './styles';

interface Props {
  message?: MessageResource;
  userId?: string;
}

export default function Message({ message, userId }: Props) {
  const isFromUser = message?.userId === parseInt(userId ?? '');
  return (
    <MessageBody isFromUser={isFromUser}>
      <MessageContent isFromUser={isFromUser}>{message?.text}</MessageContent>
    </MessageBody>
  );
}
