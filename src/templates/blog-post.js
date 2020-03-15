import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { theme } from "../theme/theme"
import { Badge } from "../components/Badge"
import { CardStatic, CardHeader } from "../components/Card"
import { SlackButton } from "../components/SlackButton"
import { Section, Wrapper, Grid, Col } from "../components/Grid"

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
        <Section style={{ paddingBottom: '32px' }}>
          <Wrapper>
            <Grid>
              <Col>
                <h5 style={{ marginBottom: '24px' }}>
                  <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>Home</Link>
                  &nbsp;&nbsp;/&nbsp;&nbsp;
                  <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/design-challenges`}>Challenges</Link>
                  &nbsp;&nbsp;/&nbsp;&nbsp;
                  <span style={{
                  color: theme.orange,
                  }}>
                    {post.frontmatter.title}
                  </span>
                </h5>
                <CardStatic style={{ flexDirection: 'column' }}>
                  <CardHeader>
                    <h1
                      style={{
                        marginTop: `0`,
                        marginBottom: `1.6rem`,
                      }}
                    >
                      {post.frontmatter.title}
                    </h1>
                    <p
                      style={{
                        display: `block`,
                      }}
                    >
                      <Badge color={theme.orange}>
                        {post.frontmatter.date}
                      </Badge>
                    </p>
                  </CardHeader>
                  <section dangerouslySetInnerHTML={{ __html: post.html }} />
                  <hr
                    style={{
                      marginBottom: rhythm(1),
                    }}
                  />
                  <SlackButton />
                </CardStatic>
              </Col>
            </Grid>
          </Wrapper>
        </Section>
        <Wrapper>
          <Grid>
            <Col>
            <nav>
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: `0`,
                  margin: '0'
                }}
              >
                <li style={{ marginBottom: '0' }}>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev"
                    style={{
                      textDecoration: `none`,
                      borderBottom: `1px solid`,
                      paddingBottom: `0`,
                      color: `inherit`,
                    }}>
                      ← Previous
                    </Link>
                  )}
                </li>
                <li style={{ marginBottom: '0' }}>
                  {next && (
                    <Link to={next.fields.slug} rel="next"
                    style={{
                      textDecoration: `none`,
                      borderBottom: `1px solid`,
                      paddingBottom: `0`,
                      color: `inherit`,
                    }}>
                      Next →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            </Col>
          </Grid>
        </Wrapper>
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
