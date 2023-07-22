import React, { ReactNode } from 'react';

import { Variant } from 'Models/UserInterfaceResources';

import { StyledButton } from './styles';

interface Props {
  onClick: () => void;
  children: ReactNode;
  style?: any;
  variant?: Variant;
}

export default function RoundButton({
  onClick,
  children,
  style,
  variant = 'primary',
}: Props) {
  return (
    <StyledButton variant={variant} style={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
