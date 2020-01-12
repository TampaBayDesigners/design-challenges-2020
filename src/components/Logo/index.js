import React from 'react';
import theme from "../../theme"
import styled from 'styled-components';

const LogoLink = styled.div`
  width: 64px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, ${theme.red}, ${theme.yellow});
  border-radius: 20px;
  padding: 4px;
  color: white;
  box-shadow: inset 0px -0.25px 0.5px rgba(0, 0, 0, 0.08), inset 0px 0.25px 0.5px rgba(255, 255, 255, 0.16), 0px 1.5px 2px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(0, 0, 0, 0.12);
`;

const Logo = () => {
  return (
    <LogoLink>
      <svg style={{display: `block`, width: `100%`}} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.7963 52.2651L18.6496 61.3503L27.7347 59.2036L61.2143 25.7241L54.2758 18.7856L20.7963 52.2651ZM29.2073 62.9658C29.5686 62.8805 29.899 62.6962 30.1616 62.4337L65.4569 27.1383C66.238 26.3573 66.238 25.091 65.4569 24.3099L55.69 14.543C54.909 13.762 53.6426 13.762 52.8616 14.543L17.5662 49.8383C17.3037 50.1009 17.1194 50.4313 17.034 50.7926L14.0124 63.5813C13.6704 65.0285 14.9714 66.3295 16.4187 65.9876L29.2073 62.9658Z" fill="currentColor"/>
        <path d="M29.5213 59.45C29.1308 59.8405 28.4976 59.8405 28.1071 59.45L25.0356 56.3785C24.6451 55.988 24.6451 55.3548 25.0356 54.9643L57.6857 22.3141C58.0763 21.9236 58.7094 21.9236 59.1 22.3141L62.1715 25.3856C62.562 25.7761 62.562 26.4093 62.1715 26.7998L29.5213 59.45Z" fill="white"/>
        <path d="M21.2957 63.9357C20.9052 64.3262 20.2721 64.3262 19.8815 63.9357L16.81 60.8642C16.4195 60.4737 16.4195 59.8405 16.81 59.45L17.3179 58.9421C17.7084 58.5516 18.3416 58.5516 18.7321 58.9421L21.8036 62.0136C22.1941 62.4041 22.1941 63.0373 21.8036 63.4278L21.2957 63.9357Z" fill="currentColor"/>
        <path d="M37.0294 24.4341L26.9406 14.3453C26.1595 13.5643 24.8932 13.5643 24.1122 14.3453L14.3452 24.1122C13.5642 24.8933 13.5642 26.1596 14.3452 26.9406L24.434 37.0294L27.2625 34.201L18.5879 25.5264L25.5264 18.5879L26.7108 19.7723L23.2415 23.2416L24.6557 24.6558L28.125 21.1866L30.7236 23.7852L27.2543 27.2544L28.6686 28.6686L32.1378 25.1994L34.2009 27.2625L37.0294 24.4341Z" fill="currentColor"/>
        <path d="M45.7851 52.7236L54.4736 61.4121L61.412 54.4736L60.2276 53.2891L56.7583 56.7584L55.3441 55.3442L58.8133 51.8749L56.2147 49.2763L52.7455 52.7455L51.3313 51.3313L54.8005 47.8621L52.7236 45.7851L55.552 42.9567L65.6547 53.0594C66.4357 53.8404 66.4357 55.1068 65.6547 55.8878L55.8878 65.6547C55.1067 66.4358 53.8404 66.4358 53.0593 65.6547L42.9567 55.552L45.7851 52.7236Z" fill="currentColor"/>
      </svg>
    </LogoLink>
  )
}

export default Logo;