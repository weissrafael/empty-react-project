import React, { useEffect } from 'react';

import EmptyState from 'Components/EmptyState/EmptyState';
import Feed from 'Components/Feed/Feed';
import SkeletonFeed from 'Components/SkeletonFeed/Feed';
import useContacts from 'Hooks/useContacts';
import { PageHeader } from 'Styles/common.styles';

import { useGroupStore } from '../Stores/group';

function Contacts() {
  const {
    isLoading,
    isError,
    data: dataFromApi,
  } = useContacts.useGetContacts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isGroupMode } = useGroupStore((state) => state);

  return (
    <>
      {/*<FullScreenLoader isLoading={true} />*/}
      {!isError && !isLoading && dataFromApi.length > 0 && (
        <PageHeader>
          <h1>{isGroupMode ? 'New Group' : 'Contacts'}</h1>
          <span>
            {isGroupMode
              ? 'Select the contacts you want for the new group'
              : 'Click on a contact to start a conversation'}
          </span>
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
