import { createGlobalStyle } from 'styled-components';
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  * {
      margin: 0;
      padding: 0;
      border: 0;
  }

  body {
    margin: 0;
    font-family: "Fira Code", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.fontBlack};
      
  }
  


  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
      padding: 0;
      margin: 0;
  }

  section{
      padding: 100px 0;
  }
  button {
    background-color: unset;
    border: none;
      cursor: pointer;
      color: ${theme.colors.fontBlack};
  }
`;
