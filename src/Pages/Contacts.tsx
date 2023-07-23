import React, { useEffect } from 'react';

import EmptyState from 'Components/EmptyState/EmptyState';
import Feed from 'Components/Feed/Feed';
import SkeletonFeed from 'Components/SkeletonFeed/Feed';
import useContacts from 'Hooks/useContacts';
import { PageHeader } from 'Styles/common.styles';

import FullScreenLoader from '../Components/FullscreenLoader/FullScreenLoader';

function Contacts() {
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
      {/*<FullScreenLoader isLoading={true} />*/}
      {!isError && !isLoading && dataFromApi.length > 0 && (
        <PageHeader>
          <h1>Contacts</h1>
          <span>Click on a contact to start a conversation</span>
        </PageHeader>
      )}
      {isLoading && <SkeletonFeed />}
      {/*{isError && !isLoading && <ErrorState />}*/}
      {!isError && !isLoading && dataFromApi.length === 0 && <EmptyState />}
      {!isError && !isLoading && <Feed data={dataFromApi} />}
    </>
  );
}

export default React.memo(Contacts);
