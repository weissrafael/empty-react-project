import {
  ConversationResource,
  ConversationApiResource,
} from 'Models/ConversationResource';

export function formatConversations(
  conversations: ConversationApiResource[]
): ConversationResource[] {
  return conversations.map((conversation) => {
    return conversationApiToFrontResource(conversation);
  });
}

export function formatConversation(
  conversation: ConversationApiResource
): ConversationResource {
  return conversationApiToFrontResource(conversation);
}

const conversationApiToFrontResource = (
  conversation: ConversationApiResource
): ConversationResource => {
  const { id, name, last_seen_at } = conversation;
  return {
    id,
    name,
    lastSeenAt: last_seen_at,
  };
};
