export interface ContactApiResource {
  id: number;
  name: string;
  last_seen_at: string;
}

export interface LinksResource {
  first: null;
  last: null;
  prev: null;
  next: null;
}

export interface MetaResource {
  path: string;
  per_page: number;
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
