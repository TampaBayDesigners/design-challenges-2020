import React from 'react';
import { theme } from "../../theme/theme"
import styled from 'styled-components'
import { Link } from "gatsby"
import { Section, Wrapper, Grid, ColCentered } from '../Grid'
import { SlackButton } from "../SlackButton"

const HeaderContainer = styled(Link)`
  text-align: center;
  padding: 10vh 1.6rem 4.8rem;
  text-decoration: none;
  color: inherit;
  padding-top: 14.4rem;
  padding-bottom: 8rem;
  @media screen and (max-width: 768px) {
    padding-top: 12rem;
    padding-bottom: 4.8rem;
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
              <SlackButton />
            </HeaderContainer>
          </Section>
        </ColCentered>
      </Grid>
    </Wrapper>
  )
}

export default Header;