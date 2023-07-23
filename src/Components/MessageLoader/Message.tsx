import React from 'react';

import { MessageBody, MessageContent } from '../Message/styles';

import { StyledLoader } from './styles';

const EllipsisLoader: React.FC = () => {
  return (
    <StyledLoader>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoader>
  );
};

export default function MessageLoader() {
  return (
    <MessageBody isFromUser={false}>
      <MessageContent isFromUser={false}>
        <EllipsisLoader />
      </MessageContent>
    </MessageBody>
  );
}
