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