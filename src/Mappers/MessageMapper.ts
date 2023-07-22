import { MessageResource, MessageApiResource } from 'Models/MessageResource';

export function formatMessages(
  messages: MessageApiResource[]
): MessageResource[] {
  return messages.map((message) => {
    return messageApiToFrontResource(message);
  });
}

const messageApiToFrontResource = (
  message: MessageApiResource
): MessageResource => {
  const { id, user_id, sent_at, text } = message;
  return {
    id,
    userId: user_id,
    sentAt: sent_at,
    text,
  };
};
