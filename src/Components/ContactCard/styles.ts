import ErrorIcon from '@mui/icons-material/Error';
import styled, { css } from 'styled-components';

import {
  borderRadius,
  colors,
  componentSize,
  fontWeights,
  scaleFactor,
  screens,
  shadows,
  spacing,
  text,
  transitions,
} from 'Styles/styleGuide';

const { callTimeHeight, cardHeight, groupedCallBubbleSize, archiveButtonSize } =
  componentSize;

export const Card = styled.div<{
  isSelected: boolean;
}>`
  ${({ isSelected }) => css`
    align-items: center;
    background-color: ${isSelected ? colors.positiveDark : colors.white};
    border-radius: ${borderRadius.card};
    box-shadow: ${shadows.shadowCenter8};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    height: ${cardHeight}px;
    margin-bottom: ${spacing.small};
    padding: ${spacing.xSmall};
    position: relative;
    transition: ${transitions.easeInOut3s};
    width: 100%;
    &:hover {
      transform: scale(${scaleFactor.item});
    }
  `}
`;

export const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactAvatar = styled.img`
  margin-right: ${spacing.xsSmall};
  max-width: 60px;
`;

export const UserName = styled.div<{
  isSelected: boolean;
}>`
  ${({ isSelected }) => css`
    align-items: center;
    color: ${isSelected ? colors.white : colors.gray10};
    display: flex;
    font-size: ${text.h2};
    margin-bottom: ${spacing.xSmall};
  `}
`;

export const VisibleContent = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

export const ExpandableContent = styled.div<{
  isOpen: boolean;
  numberOfChildren: number;
}>`
  ${({ isOpen, numberOfChildren }) => css`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: ${isOpen ? numberOfChildren * callTimeHeight : '0'}px;
    min-height: ${isOpen ? numberOfChildren * callTimeHeight : '0'}px;
    opacity: ${isOpen ? 1 : 0};
    overflow: hidden;
    padding-left: ${spacing.offScale};
    padding-top: ${spacing.xxSmall};
    transition: ${transitions.easeInOut3s};
    width: 100%;
  `}
`;

export const CallInfo = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CallType = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: ${spacing.xxSmall};
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LastSeenAt = styled.div`
  color: ${colors.gray9};
  font-size: ${text.paragraph};
  padding-bottom: ${spacing.xxSmall};
`;

export const CallTime = styled.div`
  color: ${colors.gray9};
  font-size: ${text.paragraph};
  height: ${callTimeHeight}px;
`;

export const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: ${spacing.xSmall};
`;

export const ErrorMessage = styled.div`
  color: ${colors.negative};
  font-size: ${text.notification};
  margin-right: ${spacing.xSmall};
  max-width: 70px;
  text-align: right;
  @media (min-width: ${screens.xSmall}px) {
    text-align: left;
    font-size: ${text.smallBody};
    max-width: 100%;
  }
`;

export const StyledErrorIcon = styled(ErrorIcon)`
  color: ${colors.negative};
`;

export const ArchiveButton = styled.button`
  align-items: center;
  background-color: ${colors.transparent};
  border: none;
  border-radius: ${borderRadius.fullCircle};
  color: ${colors.gray6};
  cursor: pointer;
  display: flex;
  height: ${archiveButtonSize}px;
  justify-content: center;
  margin-left: auto;
  padding: ${spacing.xSmall};
  transition: ${transitions.easeInOut3s};
  width: ${archiveButtonSize}px;
  &:hover {
    color: ${colors.positive};
  }
`;

export const GroupedCallsBubble = styled.div<{ callTypeColor: string }>`
  ${({ callTypeColor }) => css`
    align-items: center;
    background-color: ${callTypeColor};
    border-radius: ${borderRadius.fullCircle};
    color: ${colors.white};
    display: flex;
    font-size: ${text.smallBody};
    font-weight: ${fontWeights.bold};
    height: ${groupedCallBubbleSize}px;
    justify-content: center;
    margin-left: ${spacing.xsSmall};
    width: ${groupedCallBubbleSize}px;
  `}
`;
