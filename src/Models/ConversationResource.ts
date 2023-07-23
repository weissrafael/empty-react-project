import { ContactApiResource, ContactResource } from './ContactResource';

export interface ConversationApiResource {
  id: number;
  name: string;
  last_seen_at: string;
}

export interface ConversationResource {
  id: number;
  name: string;
  lastSeenAt: string;
}

export interface SingleConversationApiResource {
  id: number;
  name: string;
  members: ContactApiResource[];
}

export interface SingleConversationResource {
  id: number;
  name: string;
  members: ContactResource[];
}
