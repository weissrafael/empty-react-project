import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ContactCard from '../Components/ContactCard/ContactCard';
import RoundButton from '../Components/RoundButton/RoundButton';
import { useGroupStore } from '../Stores/group';
import { CardList } from '../Styles/common.styles';
import { LoginInput, Space } from '../Styles/login.styles';

export default function CreateGroup() {
  const { selectedUsers } = useGroupStore((state) => state);
  const [text, setText] = useState<string>('');
  const navigate = useNavigate();

  function handleCreateGroup() {
    navigate('/group/1');
  }

  return (
    <>
      <LoginInput
        id="outlined-basic"
        label="Group Name"
        color="success"
        variant="outlined"
        placeholder="Type Group Name..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Space />
      <RoundButton
        style={{
          width: '100%',
          height: 50,
          fontSize: 16,
        }}
        disabled={!text}
        onClick={handleCreateGroup}
      >
        Create Group
      </RoundButton>
      <Space />
      <Space />
      <CardList>
        {selectedUsers.map((item) => (
          <ContactCard key={item.id} contact={item} />
        ))}
      </CardList>
    </>
  );
}
