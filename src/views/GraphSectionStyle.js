import styled from 'styled-components';
import { theme } from '../GlobalStyle';

export const GraphSectionStyle = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  align-self: auto;
  background-color: ${theme.color.white};
  height: 100%;
  padding-right: 40px;
  overflow: auto;
`;
