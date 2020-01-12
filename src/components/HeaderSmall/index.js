import React from 'react';
import theme from "../../theme"
import styled from 'styled-components';
import Logo from '../Logo';
import { Link } from "gatsby"

const HeaderContainer = styled.div`
  padding: 3.2rem 0 4.8rem;
  @media screen and (max-width: 768px) {
    padding-top: 1.6rem;
  }
`;

const Title = styled.h4`
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 900;
`;

const Subtitle = styled.span`
  color: ${theme.orange};
  margin-bottom: 0;
  margin-top: 16px;
  font-weight: 700;
`;

const HeaderLogo = styled.div`
  display: inline-flex;
  align-items: center;
`;

const LogoContent = styled.div`
  padding-left: 1.6rem;
`;

const HeaderSmall = () => {
  return (
    <HeaderContainer>
        <Link to={`/`} style={{
          textDecoration: `none`,
          color: `inherit`,
        }}>
          <HeaderLogo>
            <Logo />
            <LogoContent>
              <Title>
                Design Challenges
              </Title>
              <Subtitle>
                Tampa Bay Designers
              </Subtitle>
            </LogoContent>
          </HeaderLogo>
        </Link>
    </HeaderContainer>
  )
}

export default HeaderSmall;