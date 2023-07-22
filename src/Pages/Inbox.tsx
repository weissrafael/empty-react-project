import React, { useEffect } from 'react';

import EmptyState from 'Components/EmptyState/EmptyState';
import Feed from 'Components/Feed/Feed';
import SkeletonFeed from 'Components/SkeletonFeed/Feed';
import useContacts from 'Hooks/useContacts';
import { PageHeader } from 'Styles/common.styles';

function Inbox() {
  const {
    isLoading,
    isError,
    data: dataFromApi,
  } = useContacts.useGetContacts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isError && !isLoading && dataFromApi.length > 0 && (
        <PageHeader>
          <h1>Inbox</h1>
        </PageHeader>
      )}
      {isLoading && <SkeletonFeed />}
      {/*{isError && !isLoading && <ErrorState />}*/}
      {!isError && !isLoading && dataFromApi.length === 0 && <EmptyState />}
      {!isError && !isLoading && <Feed data={dataFromApi} />}
    </>
  );
}

export default React.memo(Inbox);
