import useContacts from 'Hooks/useContacts';
import React from 'react';

import EmptyState from 'Components/EmptyState/EmptyState';
import Feed from 'Components/Feed/Feed';
import SkeletonFeed from 'Components/SkeletonFeed/Feed';
import { PageHeader } from 'Styles/common.styles';

function Inbox() {
  const {
    isLoading,
    isError,
    data: dataFromApi,
    isFetching,
  } = useContacts.useGetContacts();

  return (
    <>
      {!isError && !isLoading && !isFetching && dataFromApi.length > 0 && (
        <PageHeader>
          <h1>Inbox</h1>
        </PageHeader>
      )}
      {isFetching && <SkeletonFeed />}
      {/*{isError && !isLoading && <ErrorState />}*/}
      {!isError && !isLoading && dataFromApi.length === 0 && <EmptyState />}
      {!isError && !isLoading && !isFetching && <Feed data={dataFromApi} />}
    </>
  );
}

export default React.memo(Inbox);
