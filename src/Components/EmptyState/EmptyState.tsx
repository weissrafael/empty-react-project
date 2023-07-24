import React from 'react';

import { AWSIllustrationsUrl, IllustrationNames } from 'Constants/AWS';
import { ErrorHeader, ErrorImage, PageBody } from 'Styles/common.styles';

interface Props {
  title: string;
  subtitle: string;
}

export default function EmptyState({ title, subtitle }: Props) {
  return (
    <PageBody>
      <ErrorHeader>
        {title}
        <span>{subtitle}</span>
      </ErrorHeader>
      <ErrorImage src={AWSIllustrationsUrl + IllustrationNames.archiveEmpty} />
    </PageBody>
  );
}
