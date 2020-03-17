import { createGlobalStyle } from 'styled-components';
import { theme } from "../../theme/theme"

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
    font-family: system-ui, sans-serif, system-ui, sans-serif;
    font-size: 1.8rem;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    color: ${theme.white};
    background: ${theme.black};
  }
  button {
    cursor: pointer;
  }
  input, select, button, textarea, details, summary {
    font-family: inherit;
    color: inherit;
    background: transparent;
    box-sizing: border-box;
  }
  input:focus, input:active, select:focus, select:active, button:focus, button:active, textarea:focus, textarea:active, details:focus, details:active, summary:focus, summary:active {
    outline: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 2.4rem;
    margin-top: 0;
    word-wrap: break-word;
  }
  
  h1 {
    font-size: 4.9rem;
  }
  @media screen and (min-width: 769px) {
    h1 {
      font-size: 9rem;
    }
  }
  
  h2 {
    font-size: 3.9rem;
  }
  @media screen and (min-width: 769px) {
    h2 {
      font-size: 6.4rem;
    }
  }
  
  h3 {
    font-size: 3.1rem;
  }
  @media screen and (min-width: 769px) {
    h3 {
      font-size: 4.5rem;
    }
  }
  
  h4 {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 769px) {
    h4 {
      font-size: 3.2rem;
    }
  }
  
  h5 {
    font-size: 2.1rem;
  }
  @media screen and (min-width: 769px) {
    h5 {
      font-size: 2.3rem;
    }
  }
  
  h6 {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 769px) {
    h6 {
      font-size: 1.6rem;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1.6rem;
    letter-spacing: -0.02em;
  }
  
  h1, h2, h3 {
    line-height: 1.1;
    font-weight: 900;
  }
  
  h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
  }
  
  small {
    font-size: 1.2rem;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 2.4rem;
  }

  blockquote {
    background: rgba(0,0,0,.2);
    padding: 16px;
    margin: 1.6rem 0 0;
    border-radius: 12px;
    color: ${theme.grayDark};
  }

  .mc-form {
    width: 100%:
    display: block;
    position: relative;
    input {
      display: block;
      color: ${theme.white};
      padding: 1.6rem 2rem;
      border-radius: 0.8rem;
      border: 1px solid ${theme.grayDarkest};
      background: #141414;
      width: 100%;
      transition: all 200ms ease-out 0s;
      &:focus, &:active {
        background: #101010;
        border-color: ${theme.grayDark};
      }
    }
    button {
      position: absolute;
      top: 3.2rem;
      transform: translateY(-50%);
      right: 1.2rem;
      cursor: pointer;
      border: 1px solid transparent;
      background: ${theme.pink};
      padding: 8px 16px;
      border-radius: 0.8rem;
      color: ${theme.white};
      padding: 0.8rem 2.4rem;
      font-size: 1.4rem;
      &:focus, &:active {
        box-shadow: 0px 0px 8px ${theme.pink};
        border-color: ${theme.white};
      }
      @media screen and (max-width: 769px) {
        position: relative;
        top: 0;
        transform: translateY(0%);
        right: 0;
        margin-top: 1.6rem;
        display: block;
        width: 100%;
        padding: 1.6rem 2rem;
        font-size: 1.8rem;
      }
    }
  }
`;

export default Globals;