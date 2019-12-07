import styled from 'styled-components';
import { flex, display, fontWeight, theme } from '../../GlobalStyle';

export const HeaderStyle = styled.header`
  background-color: ${theme.color.bluePurple};
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
