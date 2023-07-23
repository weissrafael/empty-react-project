import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from 'react';

import { ScreenLimiterChat } from 'Styles/common.styles';
import { formatTime } from 'Utils/contact';

import { AWSUserAvatarUrl } from '../../../Constants/AWS';
import { useChatStore } from '../../../Stores/chat';
import {
  HeaderChatContainer,
  InfoContainer,
  TopLeftTabButton,
  UserName,
  ChatContactAvatar,
  LastSeenAt,
} from '../styles';

function GroupHeader() {
  const { members, selectedUser } = useChatStore((state) => state);
  const { lastSeenAt, name, id } = selectedUser;
  const date = formatTime(lastSeenAt);
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const avatarUrl = AWSUserAvatarUrl + 'user' + id + '.png';

  return (
    <HeaderChatContainer>
      <ScreenLimiterChat>
        <UserName>{capitalName}</UserName>
        <LastSeenAt>{date}</LastSeenAt>
        <TopLeftTabButton to="/inbox">
          <ArrowCircleLeftIcon />
        </TopLeftTabButton>
        <InfoContainer>
          <ChatContactAvatar src={avatarUrl} />
        </InfoContainer>
      </ScreenLimiterChat>
    </HeaderChatContainer>
  );
}

export default React.memo(GroupHeader);
