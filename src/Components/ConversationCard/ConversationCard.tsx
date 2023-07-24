import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContactResource } from 'Models/ContactResource';

import { AWSUserAvatarUrl } from '../../Constants/AWS';
import useCurrentPage from '../../Hooks/useCurrentPage';
import { ConversationResource } from '../../Models/ConversationResource';
import { PagesEnum } from '../../Models/UserInterfaceResources';
import { useChatStore } from '../../Stores/chat';
import { useGroupStore } from '../../Stores/group';
import { formatTime } from '../../Utils/contact';

import {
  ActivityInfo,
  Card,
  ContactAvatar,
  LastSeenAt,
  UserName,
} from './styles';

interface Props {
  conversation: ConversationResource;
}

export default function ConversationCard({ conversation }: Props) {
  const contact = conversation.members[1];
  const { id, name } = conversation;
  const { lastSeenAt } = contact;
  const { activePage } = useCurrentPage.useCurrentPage();
  const navigate = useNavigate();
  const date = formatTime(lastSeenAt);
  const avatarUrl = AWSUserAvatarUrl + 'user' + contact.id + '.png';
  const capitalName = name?.charAt(0).toUpperCase() + name?.slice(1);
  const { selectUser, setSelectedConversation } = useChatStore(
    (state) => state
  );

  function handleClick() {
    setSelectedConversation(conversation);
    navigate('/chat/' + id);
    selectUser(contact);
  }

  return (
    <Card onClick={handleClick}>
      <ContactAvatar src={avatarUrl} />
      <ActivityInfo>
        <UserName>{capitalName ? capitalName : 'Unknown'}</UserName>
        {activePage === PagesEnum.inbox && <LastSeenAt>{date}</LastSeenAt>}
      </ActivityInfo>
    </Card>
  );
}
