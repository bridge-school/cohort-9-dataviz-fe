import styled from 'styled-components';
import { display, fontColor, fontSize, flex } from '../GlobalStyle';

export const CohortPageStyle = styled.div`
  grid-template-columns: 25% 75%;
  height: auto;
  width: 100%;
  height: 100vh;
  ${display}
`;
export const NotificationStyle = styled.div`
  top: 50%;
  position: absolute;
  text-align: center;
  ${fontColor};
  ${fontSize};
  ${flex};
`;
