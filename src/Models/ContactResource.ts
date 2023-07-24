import { LinksResource, MetaResource } from './ApiResource';

export interface ContactApiResource {
  id: number;
  name: string;
  last_seen_at: string;
}

export interface ContactResponseResource {
  data: ContactApiResource[];
  links: LinksResource;
  meta: MetaResource;
}

export interface ContactResource {
  id: number;
  name: string;
  lastSeenAt: string;
}
