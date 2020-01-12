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