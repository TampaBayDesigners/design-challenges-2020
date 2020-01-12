import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import theme from "../theme"
import { Badge, BadgeOrange, BadgeSuccess } from "../components/Badge"
import { Card, CardHeader } from "../components/Card"
import { SlackButton } from "../components/SlackButton"

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
              All Challenges
          </Link>
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
              <BadgeOrange>
                {post.frontmatter.date}
              </BadgeOrange>
            </p>
          </CardHeader>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <SlackButton />
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
