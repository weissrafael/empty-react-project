import React from 'react';

import { AWSIllustrationsUrl, IllustrationNames } from 'Constants/AWS';
import {
  ErrorHeader,
  ErrorImage,
  StateContainer,
  PageBody,
} from 'Styles/common.styles';

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
      <ErrorImage src={AWSIllustrationsUrl + IllustrationNames.archiveEmpty} />
    </StateContainer>
  );
}
