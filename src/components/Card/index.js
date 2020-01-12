import styled from 'styled-components';
import theme from "../../theme"

export const Card = styled.article`
  display: block;
  width: 100%;
  padding: 3.2rem;
  border-radius: 0.8rem;
  background: ${props => (props.theme === 'light' ? theme.white : theme.greyAlt)};
  margin-bottom: 1.6rem;
`;

export const CardHover = styled(Card)`
  transition: all 200ms ease-out 0s;
  &:hover {
    background: ${theme.orange};
    color: ${theme.white};
  }
`;