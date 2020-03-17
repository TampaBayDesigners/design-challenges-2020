import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, Wrapper, Grid, Col } from "../components/Grid"
import { theme } from "../theme/theme"
import BlogItem from '../components/BlogItem'
import EventItem from '../components/EventItem'
import event from '../data/events'
import SignUpForm from '../components/SignUpForm'
import StyledLink from '../components/StyledLink'

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
                <h5 style={{
                  color: theme.pink,
                  marginBottom: '32px'
                }}>
                  Events
                </h5>
              </Col>
              <Col>
                <a style={{
                  boxShadow: `none`,
                  color: `inherit`,
                  textDecoration: `none`,
                  display: 'block',
                  marginBottom: '80px'
                }} rel="noopener noreferrer" target="_blank" href={event.link}>
                  <EventItem event={event} />
                </a>
                <SignUpForm />
              </Col>
              <Col>
                <h5 style={{
                  color: theme.orange,
                  marginBottom: '32px'
                }}>
                  Design Challenges
                </h5>
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
                <StyledLink to={'/design-challenges'} color={theme.orange}>View More</StyledLink>
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
        limit: 4
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
