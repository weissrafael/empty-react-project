import React, { ReactNode } from 'react';

import { Size, Variant } from 'Models/UserInterfaceResources';

import { StyledButton } from './styles';

interface Props {
  onClick: () => void;
  children: ReactNode;
  style?: React.CSSProperties;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}

export default function RoundButton({
  onClick,
  children,
  style,
  disabled,
  size = 'small',
  variant = 'primary',
}: Props) {
  return (
    <StyledButton
      disabled={disabled}
      variant={variant}
      style={style}
      onClick={onClick}
      size={size}
    >
      {children}
    </StyledButton>
  );
}
