import React, { ReactNode } from 'react';

import { Variant } from 'Models/UserInterfaceResources';

import { StyledButton } from './styles';

interface Props {
  onClick: () => void;
  children: ReactNode;
  style?: any;
  variant?: Variant;
  disabled?: boolean;
}

export default function RoundButton({
  onClick,
  children,
  style,
  disabled,
  variant = 'primary',
}: Props) {
  return (
    <StyledButton
      disabled={disabled}
      variant={variant}
      style={style}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
