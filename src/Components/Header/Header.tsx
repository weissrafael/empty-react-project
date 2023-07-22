import React from 'react';

import useCurrentPage from 'Hooks/useCurrentPage';
import { PagesEnum } from 'Models/UserInterfaceResources';

import ChatHeader from './ChatHeader/ChatHeader';
import InboxHeader from './InboxHeader/InboxHeader';

function Header() {
  const { activePage } = useCurrentPage.useCurrentPage();

  if (activePage === PagesEnum.login) return null;

  return (
    <header>
      {(activePage === PagesEnum.inbox || PagesEnum.contacts) && (
        <InboxHeader />
      )}
      {activePage === PagesEnum.chat && <ChatHeader />}
    </header>
  );
}

export default React.memo(Header);
