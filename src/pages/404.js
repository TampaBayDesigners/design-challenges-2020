import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, Wrapper, Grid, Col } from "../components/Grid"
import { CardStatic } from "../components/Card"
import { Link } from 'gatsby'
import { theme } from "../theme/theme"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <Section>
          <Wrapper>
            <Grid>
              <Col>
                <CardStatic style={{ textAlign: 'center' }}>
                  <h2>Not Found</h2>
                  <p>It seems this page does not exist ... yet</p>
                  <Link to={'/'} style={{ textDecoration: 'none', color: theme.orange }}>Back Home</Link>
                </CardStatic>
              </Col>
            </Grid>
          </Wrapper>
        </Section>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
