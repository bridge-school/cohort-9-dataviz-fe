import styled from 'styled-components';
import { fontColor, fontSize, flex } from '../GlobalStyle';

export const HomePageStyle = styled.div`
  height: calc(92vh - 50px);
  margin-bottom: 50px;
  overflow: auto;
`;

export const NotificationStyle = styled.div`
  top: 50%;
  position: absolute;
  text-align: center;
  ${fontColor};
  ${fontSize};
  ${flex};
`;
