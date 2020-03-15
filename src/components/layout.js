import React from "react"
import Header from './Header';
import HeaderSmall from './HeaderSmall';
import Globals from './Globals';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";
import Footer from "./Footer"

class Layout extends React.Component {

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
      header = (
        <Header />
      )
    } else {
      header = (
        <HeaderSmall />
      )
    }

    return (
      <React.Fragment>
        <ThemeProvider theme={lightTheme}>
          <Globals />
          <div>
            
            <header>
              {header}
            </header>
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default Layout
