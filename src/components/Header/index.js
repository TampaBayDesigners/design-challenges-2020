import React from 'react';
import { theme } from "../../theme/theme"
import styled from 'styled-components'
import { Link } from "gatsby"
import { Section, Wrapper, Grid, ColCentered } from '../Grid'
import { SlackButton } from "../SlackButton"

const HeaderContainer = styled(Link)`
  text-align: center;
  padding: 6rem 1.6rem 1.6rem;
  text-decoration: none;
  color: inherit;
  display: block;
  border-radius: 1.6rem;
  transition: all 200ms ease-out 0s;
  @media screen and (max-width: 768px) {
    padding-top: 12rem;
    padding-bottom: 4.8rem;
  }
  &:focus, &:hover, &:active {
    background: #101010;
    outline: none;
  }
`;

const Title = styled.h1`
  
`;

const Subtitle = styled.p`
  color: ${theme.grayDark};
  font-size: 2.3rem;
  font-weight: 400;
`;

const Header = () => {
  return (
    <Wrapper>
      <Grid>
        <ColCentered width="66.67%">
          <Section>
            <HeaderContainer to={`/`}>
              <Title>
                Tampa Bay
                <br />
                Designers
              </Title>
              <Subtitle>
                Learn, share and connect with your fellow designers in the Tampa Bay Area!
              </Subtitle>
            </HeaderContainer>
            <SlackButton />
          </Section>
        </ColCentered>
      </Grid>
    </Wrapper>
  )
}

export default Header;