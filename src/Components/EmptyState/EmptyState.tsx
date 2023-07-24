import React from 'react';

import { AWSIllustrationsUrl, IllustrationNames } from 'Constants/AWS';
import { ErrorHeader, ErrorImage, StateContainer } from 'Styles/common.styles';

interface Props {
  title: string;
  subtitle: string;
}

export default function EmptyState({ title, subtitle }: Props) {
  return (
    <StateContainer>
      <ErrorHeader>
        {title}
        <span>{subtitle}</span>
      </ErrorHeader>
      <ErrorImage
        width="288"
        height="300"
        src={AWSIllustrationsUrl + IllustrationNames.archiveEmpty}
      />
    </StateContainer>
  );
}
