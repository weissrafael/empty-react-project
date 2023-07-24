import { LinksResource, MetaResource } from './ApiResource';

export interface MessageApiResource {
  id: number;
  user_id: number;
  text: string;
  sent_at: string;
}

export interface MessageResource {
  id: number;
  userId: number;
  text: string;
  sentAt: string;
}

export interface MessageResponseResource {
  data: MessageApiResource[];
  links: LinksResource;
  meta: MetaResource;
}
