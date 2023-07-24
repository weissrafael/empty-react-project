import { LinksResource, MetaResource } from './ApiResource';
import { ContactApiResource, ContactResource } from './ContactResource';

export interface ConversationsApiResource {
  id: number;
  name: string;
  last_seen_at: string;
}

export interface ConversationsResource {
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

export interface ConversationsResponseResource {
  data: ConversationsApiResource[];
  links: LinksResource;
  meta: MetaResource;
}
