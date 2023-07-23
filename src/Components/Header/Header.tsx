import React from 'react';

import useCurrentPage from 'Hooks/useCurrentPage';
import { PagesEnum } from 'Models/UserInterfaceResources';

import ChatHeader from './ChatHeader/ChatHeader';
import CreateGroupHeader from './ContactsHeader/ContactsHeader';
import ContactsHeader from './CreateGroupHeader/CreateGroupHeader';
import InboxHeader from './InboxHeader/InboxHeader';

function Header() {
  const { activePage } = useCurrentPage.useCurrentPage();

  if (activePage === PagesEnum.login) return null;

  return (
    <header>
      {activePage === PagesEnum.inbox && <InboxHeader />}
      {activePage === PagesEnum.contacts && <ContactsHeader />}
      {activePage === PagesEnum.chat && <ChatHeader />}
      {activePage === PagesEnum.createGroup && <CreateGroupHeader />}
    </header>
  );
}

export default React.memo(Header);
