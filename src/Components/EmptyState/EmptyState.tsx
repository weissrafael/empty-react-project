import React from 'react';

import { AWSIllustrationsUrl, IllustrationNames } from 'Constants/AWS';
import { ErrorHeader, ErrorImage, PageBody } from 'Styles/common.styles';

export default function EmptyState() {
  return (
    <PageBody>
      <ErrorHeader>
        No conversations yet!
        <span>Start a new one by clicking on the add button</span>
      </ErrorHeader>
      <ErrorImage src={AWSIllustrationsUrl + IllustrationNames.archiveEmpty} />
    </PageBody>
  );
}
