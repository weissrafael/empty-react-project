import React from 'react';

import useCurrentPage from '../../Hooks/useCurrentPage';
import { PagesEnum } from '../../Models/UserInterfaceResources';

import ChatFooter from './ChatFooter/ChatFooter';
import InboxFooter from './InboxFooter/InboxFooter';

function Footer() {
  const { activePage } = useCurrentPage.useCurrentPage();

  if (activePage === PagesEnum.login) return null;

  return (
    <footer>
      {activePage === PagesEnum.inbox && <InboxFooter />}
      {activePage === PagesEnum.chat && <ChatFooter />}
    </footer>
  );
}

export default React.memo(Footer);
