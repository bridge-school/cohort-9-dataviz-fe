import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
    margin: 0;
    height: 100%;
    padding: 0;
    }
    
    * {
        font: 100% "Open Sans", sans-serif;
        color: rgb(53, 53, 53);
    }
`;

export default GlobalStyle;

// colors used in bridge logo:
// blue-purple: rgb(78, 87, 202), aqua: rgb(47, 161, 212), blue: rgb(0, 12, 158), pink: rgb(235, 44, 151), green: rgb(8, 195, 157)
