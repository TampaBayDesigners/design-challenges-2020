import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import { Link } from "gatsby"
import { Section, Wrapper, Grid, ColCentered } from '../Grid'

const HeaderContainer = styled.div`
  padding: 0;
  text-align: center;
  display: block;
  @media screen and (max-width: 768px) {
    padding-top: 1.6rem;
  }
`;

const Title = styled.h4`
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 900;
`;

const HeaderLogo = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  border-radius: 0.8rem;
  transition: all 200ms ease-out 0s;
  &:focus, &:hover, &:active {
    box-shadow: 0px 0px 0px 1.6rem #101010;
    background: #101010;
    outline: none;
  }
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
              <HeaderLogo to={`/`}>
                <Logo />
                <LogoContent>
                  <Title>
                  Tampa Bay Designers
                  </Title>
                </LogoContent>
              </HeaderLogo>
            </HeaderContainer>
          </ColCentered>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default HeaderSmall;