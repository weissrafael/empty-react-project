import {
  ConversationResource,
  ConversationApiResource,
} from 'Models/ConversationResource';

import { formatContact } from './ContactMapper';
import { messageApiToFrontResource } from './MessageMapper';

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
  const { id, name, members, last_message } = conversation;
  const newMembers = members.map((member) => {
    return formatContact(member);
  });
  const lastMessage = last_message
    ? messageApiToFrontResource(last_message)
    : { id: '', userId: '', sentAt: '', text: '' };
  return {
    id,
    name,
    members: newMembers,
    lastMessage,
  };
};
