import styled, { css } from 'styled-components';

import {
  borderRadius,
  colors,
  shadows,
  spacing,
  text,
} from 'Styles/styleGuide';

export const MessageBody = styled.div<{
  isFromOtherUser?: boolean;
}>`
  ${({ isFromOtherUser }) => css`
    display: flex;
    flex-direction: row;
    justify-content: ${isFromOtherUser ? 'flex-start' : 'flex-end'};
    margin-bottom: ${spacing.small};
    padding-left: ${isFromOtherUser ? 0 : spacing.small};
    padding-right: ${isFromOtherUser ? spacing.small : 0};
    width: 100%;
  `}
`;

export const MessageContent = styled.div<{
  isFromOtherUser?: boolean;
  isGroup?: boolean;
}>`
  ${({ isFromOtherUser, isGroup }) => css`
    align-items: center;
    background-color: ${isFromOtherUser ? colors.gray10 : colors.positiveDark};
    border-radius: ${borderRadius.message};
    box-shadow: ${shadows.messageShadow};
    color: ${colors.white};
    display: flex;
    flex-direction: row;
    max-width: 400px;
    min-height: 52px;
    text-align: ${isFromOtherUser ? 'left' : 'right'};
    ${isGroup && isFromOtherUser
      ? `padding: ${spacing.xSmall} ${spacing.medium} ${spacing.xSmall} ${spacing.xSmall};`
      : `padding: ${spacing.small};`}
  `}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MemberName = styled.div`
  color: ${colors.gray6};
  font-size: ${text.paragraph};
  margin-bottom: ${spacing.xxSmall};
`;

export const MessageText = styled.div``;

export const ChatAvatar = styled.img`
  margin-right: ${spacing.xsSmall};
  max-width: 40px;
`;
