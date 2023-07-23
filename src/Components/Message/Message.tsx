import React from 'react';

import { ContactResource } from '../../Models/ContactResource';
import { MessageResource } from '../../Models/MessageResource';

import { MessageBody, MessageContent } from './styles';

interface Props {
  message?: MessageResource;
  members?: ContactResource[];
}

export default function Message({ message, members }: Props) {
  const membersIds = members?.map((member) => member.id);
  const isFromUser = membersIds?.includes(message?.userId || 0);
  return (
    <MessageBody isFromUser={isFromUser}>
      <MessageContent isFromUser={isFromUser}>{message?.text}</MessageContent>
    </MessageBody>
  );
}
