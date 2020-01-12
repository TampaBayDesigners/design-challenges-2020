import React from 'react';
import theme from "../../theme"
import styled from 'styled-components';
import Logo from '../Logo';
import { Link } from "gatsby"

const HeaderContainer = styled.div`
  text-align: center;
  padding: 10vh 1.6rem 4.8rem;
  @media screen and (max-width: 768px) {
    padding-top: 4.8rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 16px;
  font-weight: 900;
`;

const Subtitle = styled.h4`
  color: ${theme.orange};
  margin-bottom: 0;
  margin-top: 16px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={`/`} style={{
        textDecoration: `none`,
        color: `inherit`,
      }}>
        <Logo />
        <Title>
          Design Challenges
        </Title>
        <Subtitle>Tampa Bay Designers</Subtitle>
      </Link>
    </HeaderContainer>
  )
}

export default Header;