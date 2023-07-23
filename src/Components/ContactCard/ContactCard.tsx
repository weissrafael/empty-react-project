import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ContactResource } from 'Models/ContactResource';

import { AWSUserAvatarUrl } from '../../Constants/AWS';
import useCurrentPage from '../../Hooks/useCurrentPage';
import { PagesEnum } from '../../Models/UserInterfaceResources';
import { useChatStore } from '../../Stores/chat';
import { formatTime } from '../../Utils/contact';

import {
  ActivityInfo,
  Card,
  ContactAvatar,
  LastSeenAt,
  UserName,
} from './styles';

interface Props {
  contact: ContactResource;
}

export default function ContactCard({ contact }: Props) {
  const { id, name, lastSeenAt } = contact;
  const { activePage } = useCurrentPage.useCurrentPage();
  const navigate = useNavigate();
  const date = formatTime(lastSeenAt);
  const avatarUrl = AWSUserAvatarUrl + 'user' + id + '.png';
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const selectUser = useChatStore((state) => state.selectUser);

  function handleClick() {
    navigate('/chat/' + id);
    selectUser(contact);
  }

  return (
    <Card onClick={handleClick}>
      <ContactAvatar src={avatarUrl} />
      <ActivityInfo>
        <UserName>{capitalName}</UserName>
        {activePage === PagesEnum.inbox && <LastSeenAt>{date}</LastSeenAt>}
      </ActivityInfo>
    </Card>
  );
}
