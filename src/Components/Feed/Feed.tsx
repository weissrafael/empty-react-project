import ContactCard from 'Components/ContactCard/ContactCard';
import React from 'react';

import { ContactResource } from 'Models/ContactResource';

import { ContactsList } from './styles';

interface Props {
  data: ContactResource[];
}

function Feed({ data }: Props) {
  return (
    <ContactsList>
      {data.map((item) => (
        <ContactCard key={item.id} contact={item} />
      ))}
    </ContactsList>
  );
}

export default React.memo(Feed);
