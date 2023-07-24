import SendIcon from '@mui/icons-material/Send';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

import { ScreenLimiter } from 'Styles/common.styles';

import { createMessage } from '../../../API/Mutations/message';
import { useChatStore } from '../../../Stores/chat';
import RoundButton from '../../RoundButton/RoundButton';
import { ButtonContainer, ChatFooterContainer, MessageInput } from '../styles';

function ChatFooter() {
  const [text, setText] = useState('');
  const { selectedConversation, setChatIsLoading } = useChatStore(
    (state) => state
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const mutateCreateConversation = useMutation(
    async () => {
      return await createMessage(selectedConversation.id, text);
    },
    {
      onSuccess: () => {
        setText('');
      },
      onError: (error) => {
        console.log(error);
        setText('');
      },
    }
  );
  const { isLoading } = mutateCreateConversation;

  const handleSend = () => {
    mutateCreateConversation.mutate();
  };

  useEffect(() => {
    setChatIsLoading(isLoading);
  }, [isLoading, setChatIsLoading]);

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
            label="Message"
          />
          <ButtonContainer>
            <RoundButton
              disabled={!text || isLoading}
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
