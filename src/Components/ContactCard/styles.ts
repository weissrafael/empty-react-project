import styled, { css } from 'styled-components';

import {
  borderRadius,
  colors,
  componentSize,
  scaleFactor,
  shadows,
  spacing,
  text,
  transitions,
} from 'Styles/styleGuide';

const { cardHeight } = componentSize;

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
    transition: ${transitions.easeInOut2s};
  `}
`;
