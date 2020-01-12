import { createGlobalStyle } from 'styled-components';
import theme from "../../theme/theme.js"

const Globals = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-y: auto;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    font-size: 1.8rem;
    font-family: system-ui, sans-serif;
    color: ${({ theme }) => theme.rootColor};
    background: ${({ theme }) => theme.rootBg};
  }
  button {
    cursor: pointer;
    color: inherit;
  }
  button:focus, button:active {
    outline: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 2.4rem;
    margin-top: 0;
    word-wrap: break-word;
  }
  
  h1 {
    font-size: 6.4rem;
    line-height: 110%;
    font-weight: 900;
    @media screen and (max-width: 1100px) {
      font-size: 4rem;
    }
  }
  
  h2 {
    font-size: 5.6rem;
    line-height: 128%;
    font-weight: 900;
    @media screen and (max-width: 1100px) {
      font-size: 3.6rem;
    }
  }
  
  h3 {
    font-size: 4.4rem;
    line-height: 128%;
    font-weight: 900;
    @media screen and (max-width: 1100px) {
      font-size: 3rem;
    }
  }
  
  h4 {
    font-size: 3.6rem;
    line-height: 128%;
    font-weight: 600;
    @media screen and (max-width: 1100px) {
      font-size: 2.4rem;
    }
  }
  
  h5 {
    font-size: 2.8rem;
    line-height: 128%;
    font-weight: 600;
    @media screen and (max-width: 1100px) {
      font-size: 1.8rem;
    }
  }
  
  h6 {
    font-size: 1.8rem;
    line-height: 135%;
    font-weight: 600;
    @media screen and (max-width: 1100px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 1.8rem;
    line-height: 160%;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0;
    + p {
      margin-top: 2.4rem;
    }
  }
  
  small {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export default Globals;