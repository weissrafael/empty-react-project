import React from 'react';

import { LoaderContainer, LoaderStyled, Dot } from './styles';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <LoaderContainer>
          <LoaderStyled>
            <Dot />
            <Dot />
            <Dot />
          </LoaderStyled>
        </LoaderContainer>
      )}
    </>
  );
};

export default Loader;
