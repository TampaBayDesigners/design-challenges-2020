import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, Wrapper, Grid, Col } from "../components/Grid"
import { theme } from "../theme/theme"
import BlogItem from '../components/BlogItem'
import StyledLink from '../components/StyledLink'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Design challenges" />
        <Section>
          <Wrapper>
            <Grid>
              <Col>
                <h5 style={{ marginBottom: '32px' }}>
                  <StyledLink style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>Home</StyledLink>
                  &nbsp;&nbsp;/&nbsp;&nbsp;
                  <span style={{
                  color: theme.orange,
                  }}>
                   Challenges
                  </span>
                </h5>
                <h3>All Design Challenges</h3>
                <p>
                  While the Daily UI challenges are great for leveling up some visual/interaction design skills, it could be tedious to work through while balancing work, life, etc. So, we decided to break design challenges up into weekly segments.
                </p>
                <p style={{ marginBottom: '32px' }}>
                  Use these challenges to set goals, learn something new, flex some muscles that haven't been used, help beginners get a behind the scenes view of design, or just do them because it may be fun.
                </p>
              </Col>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Col>
                    <BlogItem link={node.fields.slug} icon={node.frontmatter.icon} date={node.frontmatter.date}  title={title} name={node.frontmatter.description} />
                  </Col>
                )
              })}
              <div style={{ textAlign: 'center' }}>
                <StyledLink to={'/'} color={theme.orange}>Back Home</StyledLink>
              </div>
            </Grid>
          </Wrapper>
        </Section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date], order: DESC }
        ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            icon
          }
        }
      }
    }
  }
`
