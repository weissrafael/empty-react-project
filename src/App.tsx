import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'Styles/globals.css';
import 'Assets/Fonts/Dosis-Regular.ttf';
import 'Assets/Fonts/Dosis-Bold.ttf';
import Inbox from 'Pages/Inbox';
import Login from 'Pages/Login';
import NotFound from 'Pages/NotFound';

import Footer from './Components/Footer/Footer';
import FullScreenLoader from './Components/FullscreenLoader/FullScreenLoader';
import Header from './Components/Header/Header';
import useCurrentPage from './Hooks/useCurrentPage';
import Chat from './Pages/Chat';
import Contacts from './Pages/Contacts';
import CreateGroup from './Pages/CreateGroup';
import { useChatStore } from './Stores/chat';
import { PageBody } from './Styles/common.styles';

function App() {
  const { onAnimationEnd, displayLocation, transitionStage } =
    useCurrentPage.useCurrentPage();
  const { screenIsLoading } = useChatStore((state) => state);

  return (
    <span className={`${transitionStage}`} onAnimationEnd={onAnimationEnd}>
      <FullScreenLoader isLoading={screenIsLoading} />
      <Header />
      <PageBody>
        <Routes location={displayLocation}>
          <Route path="/" index element={<Login />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="create-group" element={<CreateGroup />} />
          <Route path="chat/:id" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageBody>
      <Footer />
    </span>
  );
}

export default App;
