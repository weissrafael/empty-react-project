import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useFetchContacts } from 'API/Queries/contact';

import { formatContacts } from '../Mappers/ContactMapper';
import { ContactResource } from '../Models/ContactResource';
import { PagesEnum } from '../Models/UserInterfaceResources';

const useCurrentPage = () => {
  const [activePage, setActivePage] = useState<PagesEnum | null>(
    PagesEnum.inbox
  );
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/inbox') {
      setActivePage(PagesEnum.inbox);
    } else if (path === '/archived') {
      setActivePage(PagesEnum.archived);
    } else if (path === '/') {
      setActivePage(PagesEnum.login);
    } else {
      setActivePage(PagesEnum.chat);
    }
  }, [location]);

  return {
    activePage,
  };
};

export default { useCurrentPage };
