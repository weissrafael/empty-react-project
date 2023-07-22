import AddCommentIcon from '@mui/icons-material/AddComment';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { colors } from 'Styles/styleGuide';

import { NewChatButtonContainer } from './styles';

export default function NewChatButton() {
  const navigate = useNavigate();

  function goToContacts() {
    navigate('/contacts');
  }

  return (
    <NewChatButtonContainer onClick={goToContacts}>
      <AddCommentIcon style={{ color: colors.white, fontSize: '2rem' }} />
    </NewChatButtonContainer>
  );
}
