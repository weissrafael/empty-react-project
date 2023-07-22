import { ContactResource, ContactApiResource } from 'Models/ContactResource';

export function formatContacts(
  contacts: ContactApiResource[]
): ContactResource[] {
  console.log('contacts', contacts);
  return contacts.map((contact) => {
    return contactApiToFrontResource(contact);
  });
}

export function formatContact(contact: ContactApiResource): ContactResource {
  return contactApiToFrontResource(contact);
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
