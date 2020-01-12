import React, { useState } from "react"
//import { Link } from "gatsby"
import Header from './Header';
import Globals from './Globals';
import Bio from './bio';
import { ThemeProvider } from "styled-components";
import { rhythm } from "../utils/typography"
import { lightTheme, darkTheme } from "../theme/theme";

class Layout extends React.Component {

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
      
    } else {
      
    }

    return (
      <React.Fragment>
        <ThemeProvider theme={lightTheme}>
          <Globals />
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: `800px`,
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            
            <header>
              <Header />
              {header}
            </header>
            <main>{children}</main>
            <footer style={{
              marginTop: `3.2rem`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
            }}>
              <Bio />
              <div>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a style={{
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                href="https://www.gatsbyjs.org">
                  Gatsby
                </a>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default Layout
