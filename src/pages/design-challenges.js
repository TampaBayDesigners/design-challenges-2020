import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, Wrapper, Grid, Col } from "../components/Grid"
import { theme } from "../theme/theme"
import BlogItem from '../components/BlogItem'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All challenges" />
        <Section>
          <Wrapper>
            <Grid>
              <Col>
                <h5 style={{ marginBottom: '32px' }}>
                  <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>Home</Link>
                  &nbsp;&nbsp;/&nbsp;&nbsp;
                  <span style={{
                  color: theme.orange,
                  }}>
                    Design Challenges
                  </span>
                </h5>
              </Col>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Col>
                    <Link style={{ boxShadow: `none`, color: `inherit`, textDecoration: `none` }} to={node.fields.slug}>
                      <BlogItem icon={node.frontmatter.icon} date={node.frontmatter.date}  title={title} name={node.frontmatter.description} />
                    </Link>
                  </Col>
                )
              })}
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
