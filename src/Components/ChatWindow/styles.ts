import styled from 'styled-components';

import { colors, spacing } from 'Styles/styleGuide';

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
  justify-content: flex-end;
  padding-bottom: ${spacing.xSmall};
  width: 100%;
`;
