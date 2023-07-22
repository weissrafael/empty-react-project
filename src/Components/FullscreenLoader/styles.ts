import styled, { keyframes } from 'styled-components';

const blurAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 
  40% {
    transform: scale(1.0);
  }
`;

export const LoaderContainer = styled.div`
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const LoaderStyled = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-around;
  width: 80px;
`;

export const Dot = styled.div`
  animation: ${blurAnimation} 1.4s infinite ease-in-out both;
  background-color: #333;
  border-radius: 50%;
  height: 20px;
  width: 20px;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;
