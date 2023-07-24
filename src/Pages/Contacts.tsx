import React, { useEffect } from 'react';

import EmptyState from 'Components/EmptyState/EmptyState';
import SkeletonFeed from 'Components/SkeletonFeed/SkeletonFeed';
import useContacts from 'Hooks/useContacts';
import { CardList, PageHeader } from 'Styles/common.styles';

import { mockedLoggedUser } from '../API/mockedLoggedUser';
import ContactCard from '../Components/ContactCard/ContactCard';
import { useGroupStore } from '../Stores/group';

function Contacts() {
  const { isGroupMode, selectedUsers } = useGroupStore((state) => state);
  const {
    isLoading,
    isError,
    data: dataFromApi,
  } = useContacts.useGetContacts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const selectedUsersLength = selectedUsers.length;

  const subtitle =
    selectedUsersLength > 0
      ? `You have selected ${selectedUsersLength} contact${
          selectedUsersLength > 1 ? 's' : ''
        }`
      : isGroupMode
      ? 'Select the contacts you want for the new group'
      : 'Click on a contact to start a conversation';

  return (
    <>
      {!isError && !isLoading && dataFromApi.length > 0 && (
        <PageHeader>
          <h1>{isGroupMode ? 'New Group' : 'Contacts'}</h1>
          <span>{subtitle}</span>
        </PageHeader>
      )}
      {isLoading && <SkeletonFeed />}
      {/*{isError && !isLoading && <ErrorState />}*/}
      {!isError && !isLoading && dataFromApi.length === 0 && <EmptyState />}
      {!isError && !isLoading && (
        <CardList>
          {dataFromApi.map((item) => {
            if (item.id === mockedLoggedUser.id) return null;
            return <ContactCard key={item.id} contact={item} />;
          })}
        </CardList>
      )}
    </>
  );
}

export default React.memo(Contacts);
