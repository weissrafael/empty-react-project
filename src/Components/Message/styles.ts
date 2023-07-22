import styled, { css } from 'styled-components';

import { borderRadius, colors, shadows, spacing } from 'Styles/styleGuide';

export const MessageBody = styled.div<{
  isFromUser: boolean;
}>`
  ${({ isFromUser }) => css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${spacing.small};
    padding-left: ${isFromUser ? 0 : spacing.small};
    padding-right: ${isFromUser ? spacing.small : 0};
    width: 100%;
  `}
`;

export const MessageContent = styled.div<{
  isFromUser: boolean;
}>`
  ${({ isFromUser }) => css`
    background-color: ${isFromUser ? colors.gray10 : colors.positive};
    border-radius: ${borderRadius.message};
    box-shadow: ${shadows.messageShadow};
    color: ${colors.white};
    padding: ${spacing.small};
    text-align: ${isFromUser ? 'left' : 'right'};
    width: 100%;
  `}
`;
