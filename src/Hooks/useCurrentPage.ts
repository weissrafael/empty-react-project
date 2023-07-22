import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useFetchContacts } from 'API/Queries/contact';

import { formatContacts } from '../Mappers/ContactMapper';
import { ContactResource } from '../Models/ContactResource';
import { TabsEnum } from '../Models/UserInterfaceResources';

const useCurrentPage = () => {
  const [activePage, setActivePage] = useState<TabsEnum | null>(TabsEnum.inbox);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/inbox') {
      setActivePage(TabsEnum.inbox);
    } else if (path === '/archived') {
      setActivePage(TabsEnum.archived);
    } else if (path === '/') {
      setActivePage(TabsEnum.login);
    }
  }, [location]);

  return {
    activePage,
  };
};

export default { useCurrentPage };
