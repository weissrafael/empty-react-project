import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';

import useCurrentPage from 'Hooks/useCurrentPage';
import { PagesEnum } from 'Models/UserInterfaceResources';
import { ScreenLimiter } from 'Styles/common.styles';

import RoundButton from '../../RoundButton/RoundButton';
import { ButtonContainer, ChatFooterContainer, MessageInput } from '../styles';

function ChatFooter() {
  const [text, setText] = useState('');
  const { activePage } = useCurrentPage.useCurrentPage();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  if (activePage === PagesEnum.login) return null;

  return (
    <footer>
      <ChatFooterContainer>
        <ScreenLimiter>
          <MessageInput
            onChange={handleChange}
            value={text}
            placeholder="Type a message..."
            multiline
          />
          <ButtonContainer>
            <RoundButton
              disabled={!text}
              variant="primaryDark"
              style={{
                height: 46,
                width: 46,
              }}
              onClick={() => console.log('click')}
            >
              <SendIcon />
            </RoundButton>
          </ButtonContainer>
        </ScreenLimiter>
      </ChatFooterContainer>
    </footer>
  );
}

export default React.memo(ChatFooter);
