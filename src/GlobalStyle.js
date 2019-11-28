import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    margin: 0;
    height: 100vh;
    overflow: hidden;
    padding: 0;
    }
    
    * {
        font: 100% "Open Sans", sans-serif;
        color: rgb(53, 53, 53);
    }
`;

export const fontWeight = css`
  font-weight: ${props => (props.bold && 'bold') || (props.normal && 'normal')};
`;

export const display = css`
  display: ${props =>
    (props.inline && 'inline') ||
    (props.inlineFlex && 'inline-flex') ||
    (props.inlineBlock && 'inline-block') ||
    (props.block && 'block') ||
    (props.grid && 'grid') ||
    (props.flex && 'flex')};
`;

export const flex = css`
  ${props =>
    props.justify === 'left' &&
    css`
      justify-content: flex-start;
    `}

  ${props =>
    props.justify === 'right' &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.justify === 'center' &&
    css`
      justify-content: center;
    `}

  ${props =>
    props.justify === 'space-between' &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.align === 'top' &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.align === 'center' &&
    css`
      align-items: center;
    `}

  ${props =>
    props.align === 'bottom' &&
    css`
      align-items: flex-end;
    `}

  ${props =>
    props.align === 'baseline' &&
    css`
      align-items: baseline;
    `}

  ${props =>
    props.alignContent === 'flex-start' &&
    css`
      align-content: flex-start;
    `}

  ${props =>
    props.alignContent === 'flex-end' &&
    css`
      align-content: flex-end;
    `}

  ${props =>
    props.alignItems === 'flex-start' &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.alignItems === 'flex-end' &&
    css`
      align-items: flex-end;
    `}

  ${props =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `}

  ${props =>
    props.flexWrap &&
    css`
      flex-wrap: wrap;
    `}

  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.row &&
    css`
      flex-direction: row;
    `}

  ${props =>
    props.flexNone &&
    css`
      flex: none;
    `}
`;

export const fontColor = css`
  color: ${props =>
    (props.bluePurple && 'rgb(78, 87, 202)') ||
    (props.aqua && 'rgb(47, 161, 212)') ||
    (props.white && 'white') ||
    (props.blue && 'rgb(0, 12, 158)') ||
    (props.pink && 'rgb(235, 44, 151)') ||
    (props.green && 'rgb(8, 195, 157)')};
`;

export const fontSize = css`
  font-size: ${props =>
    (props.fontLarge && '35px') ||
    (props.fontMedium && '25px') ||
    (props.fontSmall && '20px')};
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  ${flex};
  ${display};
  ${fontWeight};
  ${fontColor};
  ${fontSize};
`;

export const MainHeader = styled.h1`
  ${fontWeight};
  ${fontSize};
`;

export const Badge = styled.div`
  border-radius: 5px;
  background: rgb(235, 44, 151);
  padding: 10px 20px;
  ${fontColor};
  ${fontSize};
`;

// export default GlobalStyle;

// colors used in bridge logo:
// blue-purple: rgb(78, 87, 202), aqua: rgb(47, 161, 212), blue: rgb(0, 12, 158), pink: rgb(235, 44, 151), green: rgb(8, 195, 157)
