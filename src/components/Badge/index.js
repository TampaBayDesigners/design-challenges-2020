import styled from 'styled-components';
import { theme } from "../../theme/theme"

export const Badge = styled.span`
  display: inline-block;
  padding: 0.8rem 1.6rem;
  font-size: 1.2rem;
  border: 1px solid;
  color: ${(props) => props.color ? props.color : 'currentColor'}
`;

export const BadgeOrange = styled(Badge)`
  color: ${theme.orange}
`;

export const BadgeGreen = styled(Badge)`
  color: ${theme.green}
`;