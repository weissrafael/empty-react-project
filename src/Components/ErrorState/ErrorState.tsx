import React from 'react';

import { AWSIllustrationsUrl, IllustrationNames } from 'Constants/AWS';
import { ErrorHeader, ErrorImage, StateContainer } from 'Styles/common.styles';

export default function ErrorState() {
  return (
    <StateContainer>
      <ErrorHeader>
        Oops! Something went wrong
        <span>
          Please try again later or contact the support via bunq@support.com{' '}
        </span>
      </ErrorHeader>
      <ErrorImage src={AWSIllustrationsUrl + IllustrationNames.error} />
    </StateContainer>
  );
}
