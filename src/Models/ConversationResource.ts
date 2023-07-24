import { LinksResource, MetaResource } from './ApiResource';
import { ContactApiResource, ContactResource } from './ContactResource';

export interface ConversationApiResource {
  id: number;
  name: string;
  members: ContactApiResource[];
  last_message?: string;
}

export interface ConversationResource {
  id: number;
  name: string;
  members: ContactResource[];
}

export interface ConversationsResponseResource {
  data: ConversationApiResource[];
  links: LinksResource;
  meta: MetaResource;
}

export interface ConversationResponseResource {
  data: ConversationApiResource;
}
