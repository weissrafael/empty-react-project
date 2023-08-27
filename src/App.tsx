import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'Styles/globals.css';
import 'Assets/Fonts/Dosis-Regular.ttf';
import 'Assets/Fonts/Dosis-Bold.ttf';

import FullScreenLoader from 'Components/FullscreenLoader/FullScreenLoader';
import useCurrentPage from 'Hooks/useCurrentPage';
import Login from 'Pages/Login';
import { PageBody } from 'Styles/common.styles';

function App() {
  const { onAnimationEnd, displayLocation, transitionStage } =
    useCurrentPage.useCurrentPage();

  return (
    <span className={`${transitionStage}`} onAnimationEnd={onAnimationEnd}>
      <FullScreenLoader isLoading={false} />
      <PageBody>
        <Routes location={displayLocation}>
          <Route path="/" index element={<Login />} />
        </Routes>
      </PageBody>
    </span>
  );
}

export default App;
