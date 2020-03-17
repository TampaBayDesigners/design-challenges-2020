import styled from 'styled-components'
import { Link } from 'gatsby'
import { theme } from '../../theme/theme'

const StyledLink = styled(Link)`
  color: ${(props) => props.color ? props.color : 'inherit'};
  text-decoration: none;
  transition: all 200ms ease-out 0s;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  &:hover, &:focus, &:active {
    outline: none;
    border-color: currentColor;
    text-shadow: 0px 1px 3px currentColor, 0px 4px 24px currentColor;
  }
`;

export default StyledLink

