import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGroupStore } from 'Stores/group';
import { ScreenLimiterContacts } from 'Styles/common.styles';

import RoundButton from '../../RoundButton/RoundButton';
import {
  HeaderChatContainer,
  InfoContainer,
  TopLeftTabButton,
} from '../styles';

function ContactsHeader() {
  const navigate = useNavigate();
  const { isGroupMode, setIsGroupMode, reset, selectedUsers } = useGroupStore(
    (state) => state
  );

  function goToCreateGroupPage() {
    navigate('/create-group');
  }

  function toggleGroupMode() {
    reset();
    setIsGroupMode(!isGroupMode);
  }

  return (
    <HeaderChatContainer>
      <ScreenLimiterContacts>
        <TopLeftTabButton to="/inbox">
          <ArrowCircleLeftIcon />
        </TopLeftTabButton>
        <InfoContainer>
          <RoundButton
            onClick={toggleGroupMode}
            variant={isGroupMode ? 'secondary' : 'primary'}
          >
            {isGroupMode ? 'Cancel' : 'New Group'}
          </RoundButton>
          {isGroupMode && (
            <RoundButton
              style={{ marginLeft: '1rem' }}
              onClick={goToCreateGroupPage}
              variant="primary"
              disabled={!selectedUsers.length}
            >
              Next
            </RoundButton>
          )}
        </InfoContainer>
      </ScreenLimiterContacts>
    </HeaderChatContainer>
  );
}

export default React.memo(ContactsHeader);
