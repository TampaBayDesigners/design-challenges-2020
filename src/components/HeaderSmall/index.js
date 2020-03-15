import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import { Link } from "gatsby"
import { Section, Wrapper, Grid, ColCentered } from '../Grid'

const HeaderContainer = styled.div`
  padding: 0;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-top: 1.6rem;
  }
`;

const Title = styled.h4`
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 900;
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
    <Section style={{ padding: '3.2rem 0 0' }}>
      <Wrapper>
        <Grid>
          <ColCentered>
            <HeaderContainer>
              <Link to={`/`} style={{
                textDecoration: `none`,
                color: `inherit`,
              }}>
                <HeaderLogo>
                  <Logo />
                  <LogoContent>
                    <Title>
                    Tampa Bay Designers
                    </Title>
                  </LogoContent>
                </HeaderLogo>
              </Link>
            </HeaderContainer>
          </ColCentered>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default HeaderSmall;