import styled, { css } from 'styled-components';

import {
  borderRadius,
  colors,
  shadows,
  spacing,
  text,
} from 'Styles/styleGuide';

export const MessageBody = styled.div<{
  isFromUser?: boolean;
}>`
  ${({ isFromUser }) => css`
    display: flex;
    flex-direction: row;
    justify-content: ${isFromUser ? 'flex-start' : 'flex-end'};
    margin-bottom: ${spacing.small};
    padding-left: ${isFromUser ? 0 : spacing.small};
    padding-right: ${isFromUser ? spacing.small : 0};
    width: 100%;
  `}
`;

export const MessageContent = styled.div<{
  isFromUser?: boolean;
  isGroup?: boolean;
}>`
  ${({ isFromUser, isGroup }) => css`
    align-items: center;
    background-color: ${isFromUser ? colors.gray10 : colors.positiveDark};
    border-radius: ${borderRadius.message};
    box-shadow: ${shadows.messageShadow};
    color: ${colors.white};
    display: flex;
    flex-direction: row;
    max-width: 400px;
    min-height: 52px;
    text-align: ${isFromUser ? 'left' : 'right'};
    ${isGroup && isFromUser
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
