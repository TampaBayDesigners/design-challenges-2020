import React from 'react'
import styled from "styled-components"
import { theme } from '../../theme/theme'

const FooterContainer = styled.footer`
  padding: 32px 0 48px;
  text-align: center;
`;

const FooterLink = styled.a`
  margin-right: 16px;
  margin-left: 16px;
  text-decoration: none;
  color: ${(props) => props.color ? props.color : 'inherit'};
  border-bottom: 1px solid transparent;
  padding-bottom: 4px;
  transition: all 200ms ease-out 0s;
  &:hover, &:focus, &:active {
    outline: none;
    border-color: currentColor;
    text-shadow: 0px 1px 3px currentColor, 0px 4px 24px currentColor;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink color={theme.pink} href="https://cdpn.io/boomboom/v2/index.html?key=iFrameKey-2504ee9c-8c0b-3fed-35f0-f3534e78100e#">Join us on Slack</FooterLink>
      <FooterLink color={theme.blue} target="_blank" href="https://github.com/TampaBayDesigners/design-challenges-2020">Contribute on GitHub</FooterLink>
    </FooterContainer>
  )
}

export default Footer;