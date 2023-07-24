import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import RoundButton from 'Components/RoundButton/RoundButton';
import { useGroupStore } from 'Stores/group';
import { ScreenLimiterContacts } from 'Styles/common.styles';

import {
  HeaderChatContainer,
  InfoContainer,
  TopLeftTabButton,
} from '../styles';

function CreateGroupHeader() {
  const navigate = useNavigate();
  const { isGroupMode, setIsGroupMode, reset, selectedUsers, usersAvailable } =
    useGroupStore((state) => state);

  function goToCreateGroupPage() {
    navigate('/create-group');
  }

  function toggleGroupMode() {
    reset();
    setIsGroupMode(!isGroupMode);
  }

  const handleGoBack = () => {
    setTimeout(() => {
      reset();
    }, 500);
  };

  return (
    <HeaderChatContainer>
      <ScreenLimiterContacts>
        <TopLeftTabButton onClick={handleGoBack} to="/inbox">
          <ArrowCircleLeftIcon />
        </TopLeftTabButton>
        {usersAvailable.length > 0 && (
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
        )}
      </ScreenLimiterContacts>
    </HeaderChatContainer>
  );
}

export default React.memo(CreateGroupHeader);
