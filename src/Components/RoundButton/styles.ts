import styled, { css } from 'styled-components';

import { Variant } from 'Models/UserInterfaceResources';
import {
  borderRadius,
  colors,
  fontWeights,
  spacing,
  transitions,
} from 'Styles/styleGuide';

interface Props {
  variant?: Variant;
}

function getVariantStyles(variant?: Variant) {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${colors.positive};
        &:hover {
          background-color: ${colors.positiveDark};
        }
      `;
    case 'primaryDark':
      return css`
        background-color: ${colors.positiveDark};
        &:hover {
          background-color: ${colors.positive};
        }
        &:disabled {
          background-color: ${colors.gray10};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${colors.gray6};
        &:hover {
          background-color: ${colors.gray7};
        }
      `;
    case 'secondaryDark':
      return css`
        background-color: ${colors.gray10};
        &:hover {
          background-color: ${colors.gray8};
        }
      `;
  }
}

export const StyledButton = styled.button<Props>`
  ${({ variant }) => css`
    align-items: center;
    border: none;
    border-radius: ${borderRadius.roundButton};
    color: ${colors.white};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-weight: ${fontWeights.bold};
    justify-content: center;
    padding: ${spacing.xSmall} ${spacing.small};
    transition: ${transitions.easeInOut2s};
    ${getVariantStyles(variant)}
  `}
`;
