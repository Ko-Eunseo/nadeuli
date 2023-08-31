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
    margin: 0;
    margin-top: -4px; //알수없는 마진탑 없애기 위함
    padding: 0;
  }
  
  #root {
    margin: 0 auto;
    overflow-x: hidden;
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
    padding-left: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
