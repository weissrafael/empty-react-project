import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';

import { ScreenLimiterContacts } from 'Styles/common.styles';

import { HeaderChatContainer, TopLeftTabButton } from '../styles';

function ContactsHeader() {
  return (
    <HeaderChatContainer>
      <ScreenLimiterContacts>
        <TopLeftTabButton to="/contacts">
          <ArrowCircleLeftIcon />
        </TopLeftTabButton>
      </ScreenLimiterContacts>
    </HeaderChatContainer>
  );
}

export default React.memo(ContactsHeader);
