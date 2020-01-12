import styled from 'styled-components';
import theme from "../../theme"

export const Badge = styled.span`
  display: inline-block;
  background: transparent;
  color: inherit;
  border: 1px solid;
  font-size: 1.4rem;
  padding: 0.4rem 1.2rem;
  border-radius: 999px;
`;

export const BadgeOrange = styled(Badge)`
  color: ${theme.orange}
`;

export const BadgeGreen = styled(Badge)`
  color: ${theme.green}
`;