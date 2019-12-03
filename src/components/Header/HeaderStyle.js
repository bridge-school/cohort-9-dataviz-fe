import styled from 'styled-components';
import { flex, display, fontWeight } from '../../GlobalStyle';

export const HeaderStyle = styled.header`
  background-color: rgb(78, 87, 202);
  width: 100%;
  height: 8vh;
  padding: 10px 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  ${flex};
  ${display};
  ${fontWeight};
`;
