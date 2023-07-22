import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useFetchContacts } from 'API/Queries/contact';

import { formatContacts } from '../Mappers/ContactMapper';
import { ContactResource } from '../Models/ContactResource';
import { PagesEnum } from '../Models/UserInterfaceResources';

const useCurrentPage = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<PagesEnum | null>(null);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    const path = location.pathname;
    setTimeout(() => {
      if (path === '/inbox') {
        setActivePage(PagesEnum.inbox);
      } else if (path === '/archived') {
        setActivePage(PagesEnum.archived);
      } else if (path === '/') {
        setActivePage(PagesEnum.login);
      } else {
        setActivePage(PagesEnum.chat);
      }
    }, 500);
  }, [location]);

  function onAnimationEnd() {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
    }
  }

  return {
    activePage,
    onAnimationEnd,
    transitionStage,
    displayLocation,
  };
};

export default { useCurrentPage };
