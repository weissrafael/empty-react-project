import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';

import { useGroupStore } from 'Stores/group';
import { ScreenLimiterContacts } from 'Styles/common.styles';

import RoundButton from '../../RoundButton/RoundButton';
import { HeaderChatContainer, TopLeftTabButton } from '../styles';

function ContactsHeader() {
  const { isGroupMode, setIsGroupMode, reset } = useGroupStore(
    (state) => state
  );

  const toggleGroupMode = () => {
    reset();
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
        {}
      </ScreenLimiterContacts>
    </HeaderChatContainer>
  );
}

export default React.memo(ContactsHeader);
