import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    width: 100%;
    height: 100%;
    background-color: ${colors.background};
  }
  
  #root {
    margin: 0 auto;
  }
  
  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }
  ul, ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
