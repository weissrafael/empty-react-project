import ArchiveIcon from '@mui/icons-material/Archive';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import useCurrentPage from 'Hooks/useCurrentPage';
import { PagesEnum } from 'Models/UserInterfaceResources';
import { ScreenLimiter } from 'Styles/common.styles';

import {
  HeaderChatContainer,
  HeaderContainer,
  NavigationChat,
  NavigationTabs,
  SiteLogo,
  TopRightTabButton,
} from '../styles';

function ChatHeader() {
  const { activePage } = useCurrentPage.useCurrentPage();
  const navigate = useNavigate();

  function goToHome() {
    navigate('/inbox');
  }

  return (
    <HeaderChatContainer>
      <ScreenLimiter>
        <NavigationChat>
          <TopRightTabButton
            $active={activePage === PagesEnum.inbox}
            to="/inbox"
          >
            <ArrowCircleLeftIcon />
          </TopRightTabButton>
        </NavigationChat>
      </ScreenLimiter>
    </HeaderChatContainer>
  );
}

export default React.memo(ChatHeader);
