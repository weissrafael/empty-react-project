import {
  ConversationResource,
  ConversationApiResource,
} from 'Models/ConversationResource';

import { formatContact } from './ContactMapper';

export function formatConversations(
  conversations: ConversationApiResource[]
): ConversationResource[] {
  return conversations.map((conversation) => {
    return conversationApiToFrontResource(conversation);
  });
}

export const conversationApiToFrontResource = (
  conversation: ConversationApiResource
): ConversationResource => {
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
