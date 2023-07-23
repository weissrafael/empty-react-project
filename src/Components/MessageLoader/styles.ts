import styled, { keyframes } from 'styled-components';

const EllipsisAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
      transform: scale(1.0);
    }
`;

export const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  div {
    animation: ${EllipsisAnimation} 1.4s linear infinite;
    background: #fff;
    border-radius: 50%;
    height: 10px;
    width: 10px;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }

    &:nth-child(2) {
      animation-delay: -0.16s;
      margin: 0 2px;
    }

    &:nth-child(3) {
      animation-delay: 0;
    }
  }
`;
