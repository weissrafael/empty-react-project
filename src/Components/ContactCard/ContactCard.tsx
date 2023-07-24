import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ContactResource } from 'Models/ContactResource';

import { createConversation } from '../../API/Mutations/contact';
import { AWSUserAvatarUrl } from '../../Constants/AWS';
import useCurrentPage from '../../Hooks/useCurrentPage';
import { PagesEnum } from '../../Models/UserInterfaceResources';
import { useChatStore } from '../../Stores/chat';
import { useGroupStore } from '../../Stores/group';
import FullScreenLoader from '../FullscreenLoader/FullScreenLoader';

import { ActivityInfo, Card, ContactAvatar, UserName } from './styles';

interface Props {
  contact: ContactResource;
}

export default function ContactCard({ contact }: Props) {
  const { id, name } = contact;
  const { activePage } = useCurrentPage.useCurrentPage();
  const navigate = useNavigate();
  const avatarUrl = AWSUserAvatarUrl + 'user' + id + '.png';
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const { selectUser } = useChatStore((state) => state);
  const { isGroupMode, addUser, selectedUsers, removeUser } = useGroupStore(
    (state) => state
  );
  const isForSelection = isGroupMode && activePage === PagesEnum.contacts;
  const isSelected =
    isForSelection && selectedUsers.some((user) => user.id === id);

  const mutateCreateConversation = useMutation(
    async () => {
      return await createConversation([id], name);
    },
    {
      onSuccess: (data) => {
        goToChat(data.data.id);
      },
    }
  );

  function goToChat(conversationId: number) {
    selectUser(contact);
    navigate('/chat/' + conversationId);
  }

  function handleClick() {
    if (activePage === PagesEnum.createGroup) return;
    mutateCreateConversation.mutate();
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
        <UserName isSelected={isSelected}>{capitalName}</UserName>
      </ActivityInfo>
      <FullScreenLoader isLoading={mutateCreateConversation.isLoading} />
    </Card>
  );
}
