import React from "react"
import styled from "styled-components"
import { CardHover } from '../Card'
import { theme } from '../../theme/theme'

const BlogImg = styled.div`
  width: 21.6rem;
  height: 21.6rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${theme.grayDarkest};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  transition: all 200ms ease-out 0s;
  @media screen and (max-width: 769px) {
    width: 7.2rem;
    height: 7.2rem;
    top: -4.8rem;
    right: 3vw;
    position: absolute;
    font-size: 3.2rem;
  }
`;

const BlogContent = styled.div`
  padding-left: 3.2rem;
  @media screen and (max-width: 769px) {
    padding-left: 0;
    margin-top: 1.6rem;
    width: 100%;
  }
`;

const BlogName = styled.h5`
  color: ${theme.orange}
`;

const BlogTitle = styled.h2`
  color: ${theme.white}
`;

const BlogDate = styled.h5`
  color: ${theme.grayDark}
`;

const BlogContainer = styled(CardHover)`
  margin-bottom: 5.6rem;
  &:hover, &:focus {
    ${BlogImg} {
      transform: scale(1.05) rotate(-3deg);
      background: ${theme.blue};
    }
  }
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

const BlogItem = (props) => {
  return (
    <BlogContainer>
      <BlogImg>
  <span rol="img">{props.icon}</span>
      </BlogImg>
      <BlogContent>
        <BlogName>{props.name}</BlogName>
        <BlogTitle>{props.title}</BlogTitle>
        <BlogDate>{props.date}</BlogDate>
      </BlogContent>
    </BlogContainer>
  )
}

export default BlogItem