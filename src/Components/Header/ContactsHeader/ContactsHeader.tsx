import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React, { useState } from 'react';

import { ScreenLimiterContacts } from 'Styles/common.styles';

import { useChatStore } from '../../../Stores/chat';
import { useGroupStore } from '../../../Stores/group';
import RoundButton from '../../RoundButton/RoundButton';
import { HeaderChatContainer, TopLeftTabButton } from '../styles';

function ContactsHeader() {
  const { isGroupMode, setIsGroupMode } = useGroupStore((state) => state);

  const toggleGroupMode = () => {
    setIsGroupMode(!isGroupMode);
  };

  return (
    <HeaderChatContainer>
      <ScreenLimiterContacts>
        <TopLeftTabButton to="/inbox">
          <ArrowCircleLeftIcon />
        </TopLeftTabButton>
        <RoundButton
          onClick={toggleGroupMode}
          variant={isGroupMode ? 'secondary' : 'primary'}
        >
          {isGroupMode ? 'Cancel' : 'New Group'}
        </RoundButton>
      </ScreenLimiterContacts>
    </HeaderChatContainer>
  );
}

export default React.memo(ContactsHeader);
