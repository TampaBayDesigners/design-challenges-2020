import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import theme from "../theme"
import styled from 'styled-components';
import { Badge, BadgeOrange, BadgeSuccess } from "../components/Badge"

const Card = styled.article`
  display: block;
  width: 100%;
  padding: 3.2rem;
  border-radius: 0.8rem;
  background: ${props => (props.theme === 'light' ? theme.white : theme.greyAlt)};
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Card>
          <Link to={`/`} style={{
            textDecoration: `none`,
            borderBottom: `1px solid`,
            paddingBottom: `4px`,
            color: theme.orange,
          }}>
              Home
          </Link>
          <header style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            marginBottom: `3.2rem`,
            marginTop: `1.6rem`,
          }}>
            <h1
              style={{
                marginTop: `0`,
                marginBottom: `0`,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                display: `block`,
              }}
            >
              <BadgeOrange>
                {post.frontmatter.date}
              </BadgeOrange>
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </Card>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: `1.6rem 0.8rem`,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev"
                style={{
                  textDecoration: `none`,
                  borderBottom: `1px solid`,
                  paddingBottom: `4px`,
                  color: `inherit`,
                }}>
                  ← Previous Challenge
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next"
                style={{
                  textDecoration: `none`,
                  borderBottom: `1px solid`,
                  paddingBottom: `4px`,
                  color: `inherit`,
                }}>
                  Next Challenge →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
