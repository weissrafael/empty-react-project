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
    <MessageBody isFromOtherUser={false}>
      <MessageContent isFromOtherUser={false}>
        <EllipsisLoader />
      </MessageContent>
    </MessageBody>
  );
}
