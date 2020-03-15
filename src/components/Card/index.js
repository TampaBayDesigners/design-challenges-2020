import styled from 'styled-components';
import { theme } from "../../theme/theme"

export const Card = styled.article`
  display: block;
  background: #141414;
  width: 100%;
  background: ${props => (props.theme === 'light' ? theme.white : theme.greyAlt)};
  margin-bottom: 1.6rem;
`;

export const CardHover = styled(Card)`
  background: #141414;
  box-shadow: 0px 0px 0px 1.6rem #141414;
  display: flex;
  text-decoration: none;
  color: inherit;
  align-items: center;
  position: relative;
  transition: all 200ms ease-out 0s;
  &:hover {
    background: #0d0d0d;
    box-shadow: 0px 0px 0px 0px #141414;
  }
`;

export const CardStatic = styled(Card)`
  padding: 3.2rem;
  @media screen and (max-width: 768px) {
    padding: 2.4rem;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  margin-top: 1.6rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;