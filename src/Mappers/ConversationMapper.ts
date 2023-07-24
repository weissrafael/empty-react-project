import {
  ConversationsResource,
  ConversationsApiResource,
  SingleConversationResource,
  SingleConversationApiResource,
} from 'Models/ConversationsResource';

import { formatContact } from './ContactMapper';

export function formatConversations(
  conversations: ConversationsApiResource[]
): ConversationsResource[] {
  return conversations.map((conversation) => {
    return conversationApiToFrontResource(conversation);
  });
}

export const conversationApiToFrontResource = (
  conversation: ConversationsApiResource
): ConversationsResource => {
  const { id, name, last_seen_at } = conversation;
  return {
    id,
    name,
    lastSeenAt: last_seen_at,
  };
};

export const singleConversationApiToFrontResource = (
  conversation: SingleConversationApiResource
): SingleConversationResource => {
  const { id, name, members } = conversation;
  const newMembers = members.map((member) => {
    return formatContact(member);
  });
  return {
    id,
    name,
    members: newMembers,
  };
};
