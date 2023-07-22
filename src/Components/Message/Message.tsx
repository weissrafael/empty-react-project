import React from 'react';

import { MessageResource } from '../../Models/MessageResource';

import { MessageBody } from './styles';

interface Props {
  message?: MessageResource;
}

export default function Message({ message }: Props) {
  return <MessageBody>{message?.text}</MessageBody>;
}
