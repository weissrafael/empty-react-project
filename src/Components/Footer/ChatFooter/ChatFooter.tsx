import ContactsIcon from '@mui/icons-material/Contacts';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';

import CallButton from 'Components/CallButton/CallButton';
import useCurrentPage from 'Hooks/useCurrentPage';
import { PagesEnum } from 'Models/UserInterfaceResources';
import { ScreenLimiter, TabButton } from 'Styles/common.styles';

import {
  FooterContainer,
  LeftActions,
  NotificationBubble,
  RightActions,
  TabRightButton,
} from '../styles';

function ChatFooter() {
  const { activePage } = useCurrentPage.useCurrentPage();

  if (activePage === PagesEnum.login) return null;

  return (
    <footer>
      <FooterContainer>
        <ScreenLimiter></ScreenLimiter>
      </FooterContainer>
    </footer>
  );
}

export default React.memo(ChatFooter);
