import { LinksResource, MetaResource } from './ApiResource';
import { ContactApiResource, ContactResource } from './ContactResource';
import { MessageApiResource, MessageResource } from './MessageResource';

export interface ConversationApiResource {
  id: number;
  name: string;
  members: ContactApiResource[];
  last_message?: MessageApiResource;
}

export interface ConversationResource {
  id: number;
  name: string;
  members: ContactResource[];
  lastMessage: MessageResource;
}

export interface ConversationsResponseResource {
  data: ConversationApiResource[];
  links: LinksResource;
  meta: MetaResource;
}

export interface ConversationResponseResource {
  data: ConversationApiResource;
}
