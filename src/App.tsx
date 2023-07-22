import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import 'Styles/globals.css';
import 'Assets/Fonts/Dosis-Regular.ttf';
import 'Assets/Fonts/Dosis-Bold.ttf';
import Inbox from 'Pages/Inbox';
import Login from 'Pages/Login';
import NotFound from 'Pages/NotFound';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Chat from './Pages/Chat';
import { PageBody } from './Styles/common.styles';

function App() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage('fadeOut');
  }, [location, displayLocation]);

  if (!isLoggedIn)
    return (
      <PageBody>
        <Login setIsLoggedIn={setIsLoggedIn} />
      </PageBody>
    );

  return (
    <>
      <Header />
      <PageBody
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn');
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" index element={<Inbox />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="chat/:id" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageBody>
      <Footer />
    </>
  );
}

export default App;
