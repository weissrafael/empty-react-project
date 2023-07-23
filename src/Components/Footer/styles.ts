import { TextField } from '@mui/material';
import styled from 'styled-components';

import { TabButton } from 'Styles/common.styles';
import {
  borderRadius,
  colors,
  componentSize,
  fontWeights,
  iconSize,
  layerOrder,
  screens,
  shadows,
  spacing,
  text,
  transitions,
} from 'Styles/styleGuide';

const { footerHeight, notificationBubbleSize } = componentSize;

export const FooterContainer = styled.div`
  align-items: center;
  background-color: ${colors.white};
  bottom: 0;
  box-shadow: ${shadows.shadowTop8};
  display: flex;
  flex-direction: row;
  height: ${footerHeight}px;
  justify-content: center;
  padding: 0 ${spacing.small};
  position: fixed;
  width: 100%;
  z-index: ${layerOrder.levelOne};
`;

export const ChatFooterContainer = styled(FooterContainer)`
  height: auto;
  padding-bottom: ${spacing.small};
  padding-top: ${spacing.small};
`;

export const MessageInput = styled(TextField)`
  height: 100%;
  width: 100%;
  textarea {
    height: 100%;
    max-height: 68px;
    overflow-y: auto !important;
    width: 100%;
  }
  & label.Mui-focused {
    color: ${colors.positiveDark};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${colors.positiveDark};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${colors.gray9} !important;
      border-width: 2px;
      transition: ${transitions.easeInOut2s};
    }
    &:hover fieldset {
      border-color: ${colors.gray10};
    }
    &.Mui-focused fieldset {
      border-color: ${colors.positiveDark} !important;
      border-width: 2px;
    }
  }
`;

export const LeftActions = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  padding-left: ${spacing.xxSmall};
  width: 100%;
  @media (min-width: ${screens.small}px) {
    justify-content: flex-end;
  }
`;

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-left: ${spacing.small};
`;

export const RightActions = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-right: ${spacing.xxSmall};
  width: 100%;
  @media (min-width: ${screens.small}px) {
    justify-content: flex-start;
  }
`;

export const NotificationBubble = styled.div`
  align-items: center;
  background-color: ${colors.positive};
  border-radius: ${borderRadius.fullCircle};
  color: ${colors.white};
  display: flex;
  font-size: ${text.notification};
  font-weight: ${fontWeights.bold};
  height: ${notificationBubbleSize}px;
  justify-content: center;
  position: absolute;
  right: 8px;
  top: 9px;
  width: ${notificationBubbleSize}px;
  @media (min-width: ${screens.medium}px) {
    right: 4px;
  }
`;

export const TabRightButton = styled(TabButton)`
  margin-left: ${spacing.small};
  margin-right: 0;
  @media (min-width: ${screens.medium}px) {
    margin-left: ${spacing.medium};
    svg {
      font-size: ${iconSize.tabIconDesktop};
    }
  }
`;
