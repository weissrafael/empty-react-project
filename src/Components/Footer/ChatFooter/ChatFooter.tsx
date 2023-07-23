import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';

import useCurrentPage from 'Hooks/useCurrentPage';
import { PagesEnum } from 'Models/UserInterfaceResources';
import { ScreenLimiter } from 'Styles/common.styles';

import { MessageResource } from '../../../Models/MessageResource';
import { useChatStore } from '../../../Stores/chat';
import RoundButton from '../../RoundButton/RoundButton';
import { ButtonContainer, ChatFooterContainer, MessageInput } from '../styles';

function ChatFooter() {
  const [text, setText] = useState('');
  const { activePage } = useCurrentPage.useCurrentPage();
  const { addMessage } = useChatStore((state) => state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  if (activePage === PagesEnum.login) return null;

  const randomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleSend = () => {
    addMessage({
      id: randomId(),
      userId: 999,
      text: text,
      sentAt: new Date().toString(),
    });
    setText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (text.trim() !== '') {
        handleSend();
      }
    }
  };

  return (
    <footer>
      <ChatFooterContainer>
        <ScreenLimiter>
          <MessageInput
            onChange={handleChange}
            value={text}
            placeholder="Type a message..."
            multiline
            onKeyPress={handleKeyPress}
          />
          <ButtonContainer>
            <RoundButton
              disabled={!text}
              variant="primaryDark"
              style={{
                height: 46,
                width: 46,
              }}
              onClick={handleSend}
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
