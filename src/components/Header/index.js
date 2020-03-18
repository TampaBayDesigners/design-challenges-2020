import React from 'react';
import { theme } from "../../theme/theme"
import styled from 'styled-components'
import { Link } from "gatsby"
import { Section, Wrapper, Grid, ColCentered } from '../Grid'
import { SlackButton } from "../SlackButton"

const HeaderContainer = styled(Link)`
  text-align: center;
  padding: 1.6rem;
  margin-bottom: 1.6rem;
  text-decoration: none;
  color: inherit;
  display: block;
  border-radius: 1.6rem;
  transition: all 200ms ease-out 0s;
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

const CTA = styled.div`
  text-align: center;
  font-size: 1.4rem;
  color: ${theme.yellow};
  margin-top: 1.6rem;
`;

const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  border-radius: 0.8rem;
  padding: 1.6rem;
  margin-top: 0;
  box-shadow: inset 0px -0.25px 0.5px rgba(0, 0, 0, 0.08), inset 0px 0.25px 0.5px rgba(255, 255, 255, 0.16), 0px 1.5px 2px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(0, 0, 0, 0.12);
  color: rgba(255,255,255,1);
  background: ${theme.green};
  text-shadow: 0px 1px 2px rgba(0,0,0,0.12);
  transition: all 200ms ease-out 0s;
  min-width: 300px;
  justify-content: center;
  font-weight: 700;
  &:hover {
    background: rgba(40,40,40, 1);
  }
  &:focus, &:active {
    box-shadow: 0px 0px 0px 0.4rem rgba(255,255,255,0.2);
    outline: 0;
  }
`;

const CTALinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2.4rem;
  grid-row-gap: 2.4rem;
  @media screen and (max-width: 930px) {
    grid-template-columns: 1fr;
  }
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
            <ButtonGroup>
              <SlackButton />
              <CTALinkContainer>
                <CTALink href="https://serviceindustry.tips/tpa/" target="_blank">Help the Tampa Service Industry</CTALink>
              </CTALinkContainer>
            </ButtonGroup>
            <CTA>
              Right now, service industry people are severely impacted by social distancing and quarantine. Lower amounts of patrons and restaurants closing will be tough on everyone. 
            </CTA>
          </Section>
        </ColCentered>
      </Grid>
    </Wrapper>
  )
}

export default Header;