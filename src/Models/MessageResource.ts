import { LinksResource, MetaResource } from './ApiResource';

export interface MessageApiResource {
  id: number | string;
  user_id: number | string;
  text: string;
  sent_at: string;
}

export interface MessageResource {
  id: number | string;
  userId: number | string;
  text: string;
  sentAt: string;
}

export interface MessageResponseResource {
  data: MessageApiResource[];
  links: LinksResource;
  meta: MetaResource;
}

export interface SingleMessageResponseResource {
  data: MessageApiResource;
}
