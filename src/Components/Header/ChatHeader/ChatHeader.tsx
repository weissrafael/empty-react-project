import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';
import { useParams } from 'react-router-dom';

import useCurrentPage from 'Hooks/useCurrentPage';
import useSingleUser from 'Hooks/useSingleUser';
import { PagesEnum } from 'Models/UserInterfaceResources';
import { ScreenLimiterChat } from 'Styles/common.styles';
import { formatTime } from 'Utils/contact';

import {
  HeaderChatContainer,
  TopLeftTabButton,
  UserName,
  InfoContainer,
  LastSeenAt,
} from '../styles';

function ChatHeader() {
  const { activePage } = useCurrentPage.useCurrentPage();
  const { id } = useParams();
  const { lastSeenAt, name } = useSingleUser.useGetSingleUser(id ?? '');
  const date = formatTime(lastSeenAt);
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <HeaderChatContainer>
      <ScreenLimiterChat>
        <UserName>{capitalName}</UserName>
        <TopLeftTabButton $active={activePage === PagesEnum.inbox} to="/inbox">
          <ArrowCircleLeftIcon />
        </TopLeftTabButton>
        <InfoContainer>
          <LastSeenAt>{date}</LastSeenAt>
        </InfoContainer>
      </ScreenLimiterChat>
    </HeaderChatContainer>
  );
}

export default React.memo(ChatHeader);
