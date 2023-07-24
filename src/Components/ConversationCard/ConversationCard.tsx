import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AWSUserAvatarUrl } from 'Constants/AWS';
import { ConversationResource } from 'Models/ConversationResource';
import { useChatStore } from 'Stores/chat';
import { formatTime } from 'Utils/contact';

import {
  ActivityInfo,
  Card,
  ContactAvatar,
  GroupAvatar,
  LastSeenAt,
  MessageDate,
  TopRow,
  UserName,
} from './styles';

interface Props {
  conversation: ConversationResource;
}

export default function ConversationCard({ conversation }: Props) {
  const { id, name, members, lastMessage } = conversation;
  const { text, sentAt } = lastMessage;
  const contact = members[1];
  const isGroup = members && members?.length > 2;
  const navigate = useNavigate();
  const date = formatTime(sentAt);
  const avatarUrl = AWSUserAvatarUrl + 'user' + contact.id + '.png';
  const capitalName = name?.charAt(0).toUpperCase() + name?.slice(1);
  const { setSelectedConversation } = useChatStore((state) => state);

  function handleClick() {
    setSelectedConversation(conversation);
    navigate('/chat/' + id);
  }

  return (
    <Card onClick={handleClick}>
      {isGroup ? (
        <GroupAvatar>{capitalName ? capitalName.charAt(0) : 'U'}</GroupAvatar>
      ) : (
        <ContactAvatar src={avatarUrl} />
      )}
      <ActivityInfo>
        <TopRow>
          <UserName>{capitalName ? capitalName : 'Unknown'}</UserName>
          <MessageDate>{sentAt ? date : ''}</MessageDate>
        </TopRow>
        <LastSeenAt>{text ? text : 'new chat'}</LastSeenAt>
      </ActivityInfo>
    </Card>
  );
}
