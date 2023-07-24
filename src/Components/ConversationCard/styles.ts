import styled, { css } from 'styled-components';

import {
  borderRadius,
  colors,
  componentSize,
  scaleFactor,
  screens,
  shadows,
  spacing,
  text,
  transitions,
} from 'Styles/styleGuide';

const { cardHeight } = componentSize;

export const Card = styled.div<{
  isSelected?: boolean;
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
  overflow: hidden;
  padding-right: ${spacing.small};
  width: 100%;
  @media (min-width: ${screens.medium}px) {
    padding-right: ${spacing.medium};
  }
`;

export const TopRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ContactAvatar = styled.img`
  margin-right: ${spacing.xsSmall};
  max-width: 60px;
`;

export const GroupAvatar = styled.div`
  align-items: center;
  background-color: ${colors.gray10};
  border-radius: ${borderRadius.fullCircle};
  color: ${colors.white};
  display: flex;
  font-size: 2rem;
  justify-content: center;
  margin-right: ${spacing.xsSmall};
  min-height: 60px;
  min-width: 60px;
`;

export const UserName = styled.div<{
  isSelected?: boolean;
}>`
  ${({ isSelected }) => css`
    align-items: center;
    color: ${isSelected ? colors.white : colors.gray10};
    display: flex;
    font-size: ${text.h2};
    margin-bottom: ${spacing.xSmall};
    transition: ${transitions.easeInOut2s};
  `}
`;

export const LastSeenAt = styled.div`
  color: ${colors.gray9};
  flex-wrap: wrap;
  font-size: ${text.paragraph};
  overflow: hidden;
  padding-bottom: ${spacing.xxSmall};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const MessageDate = styled.div`
  color: ${colors.gray8};
  flex-wrap: wrap;
  font-size: ${text.smallBody};
`;
