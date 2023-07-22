import { ContactResource, ContactApiResource } from 'Models/ContactResource';

export function formatContacts(
  contacts: ContactApiResource[]
): ContactResource[] {
  return contacts.map((contact) => {
    return contactApiToFrontResource(contact);
  });
}

const contactApiToFrontResource = (
  contact: ContactApiResource
): ContactResource => {
  const { id, name, last_seen_at } = contact;
  return {
    id,
    name,
    lastSeenAt: last_seen_at,
  };
};
