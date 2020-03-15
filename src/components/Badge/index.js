import styled from 'styled-components';
import { theme } from "../../theme/theme"

export const Badge = styled.span`
  display: inline-block;
  padding: 0.8rem 1.6rem;
  font-size: 1.2rem;
  color: ${(props) => props.color ? props.color : 'currentColor'};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: currentColor;
    opacity: 0.15;
  }
`;

export const BadgeOrange = styled(Badge)`
  color: ${theme.orange}
`;

export const BadgeGreen = styled(Badge)`
  color: ${theme.green}
`;