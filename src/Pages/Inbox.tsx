import React, { useEffect } from 'react';

import EmptyState from 'Components/EmptyState/EmptyState';
import SkeletonFeed from 'Components/SkeletonFeed/SkeletonFeed';
import useConversations from 'Hooks/useConversations';
import { CardList, PageHeader } from 'Styles/common.styles';

import ConversationCard from '../Components/ConversationCard/ConversationCard';

function Inbox() {
  const {
    isLoading,
    isError,
    data: dataFromApi,
  } = useConversations.useGetConversations();

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
      {!isError && !isLoading && (
        <CardList>
          {dataFromApi.map((item) => (
            <ConversationCard key={item.id} conversation={item} />
          ))}
        </CardList>
      )}
    </>
  );
}

export default React.memo(Inbox);
