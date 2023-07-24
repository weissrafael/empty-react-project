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

function ChatHeader() {
  const { name, members } = useChatStore((state) => state.selectedConversation);
  const { lastSeenAt, id } = members[1] || { id: 1, name: '', lastSeenAt: '' };
  const isGroup = members && members?.length > 2;
  const date = formatTime(lastSeenAt);
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const avatarUrl = AWSUserAvatarUrl + 'user' + id + '.png';

  return (
    <HeaderChatContainer>
      <ScreenLimiterChat>
        <UserName isGroup={isGroup}>{capitalName}</UserName>
        {!isGroup && <LastSeenAt>{date}</LastSeenAt>}
        <TopLeftTabButton to="/inbox">
          <ArrowCircleLeftIcon />
        </TopLeftTabButton>
        <InfoContainer>
          {!isGroup && <ChatContactAvatar src={avatarUrl} />}
        </InfoContainer>
      </ScreenLimiterChat>
    </HeaderChatContainer>
  );
}

export default React.memo(ChatHeader);
