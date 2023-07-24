import ContactsIcon from '@mui/icons-material/Contacts';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';

import NewChatButton from 'Components/NewChatButton/NewChatButton';
import useCurrentPage from 'Hooks/useCurrentPage';
import { PagesEnum } from 'Models/UserInterfaceResources';
import { ScreenLimiter, TabButton } from 'Styles/common.styles';

import { useLoggedUser } from '../../../Stores/loggedUser';
import {
  FooterContainer,
  LeftActions,
  NotificationBubble,
  RightActions,
  TabRightButton,
} from '../styles';

const mockNumberOfCalls = 7;

function InboxFooter() {
  const { activePage } = useCurrentPage.useCurrentPage();
  const { setLoggedUser } = useLoggedUser((state) => state);
  const handleLogout = () => {
    setLoggedUser({ id: 0, name: '', lastSeenAt: '' });
  };
  if (activePage === PagesEnum.login) return null;

  return (
    <footer>
      <FooterContainer>
        <ScreenLimiter>
          <LeftActions>
            <TabButton to="/" $active={true}>
              <LocalPhoneIcon />
              <NotificationBubble>{mockNumberOfCalls}</NotificationBubble>
            </TabButton>
            <TabButton to="/inbox">
              <Person2Icon />
            </TabButton>
          </LeftActions>
          <NewChatButton />
          <RightActions>
            <TabRightButton to="/inbox">
              <SettingsIcon />
            </TabRightButton>
            <TabRightButton onClick={handleLogout} to="/">
              <MeetingRoomIcon />
            </TabRightButton>
          </RightActions>
        </ScreenLimiter>
      </FooterContainer>
    </footer>
  );
}

export default React.memo(InboxFooter);
