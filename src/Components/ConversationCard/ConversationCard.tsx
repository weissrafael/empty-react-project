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
  const { selectUser } = useChatStore((state) => state);
  const { isGroupMode, addUser, selectedUsers, removeUser } = useGroupStore(
    (state) => state
  );
  const isForSelection = isGroupMode && activePage === PagesEnum.contacts;
  const isSelected =
    isForSelection && selectedUsers.some((user) => user.id === id);

  function handleClick() {
    if (activePage === PagesEnum.createGroup) return;
    navigate('/chat/' + id);
    selectUser(contact);
  }

  function handleSelectionClick() {
    if (isSelected) {
      removeUser(contact);
    } else {
      addUser(contact);
    }
  }

  return (
    <Card
      isSelected={isSelected}
      onClick={isForSelection ? handleSelectionClick : handleClick}
    >
      <ContactAvatar src={avatarUrl} />
      <ActivityInfo>
        <UserName isSelected={isSelected}>
          {capitalName ? capitalName : 'Unknown'}
        </UserName>
        {activePage === PagesEnum.inbox && <LastSeenAt>{date}</LastSeenAt>}
      </ActivityInfo>
    </Card>
  );
}
