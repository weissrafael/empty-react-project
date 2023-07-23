import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
      } else if (path === '/contacts') {
        setActivePage(PagesEnum.contacts);
      } else if (path === '/create-group') {
        setActivePage(PagesEnum.createGroup);
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
