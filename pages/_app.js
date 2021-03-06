import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider, injectGlobal } from 'styled-components'

// Utils
import theme from '../utils/theme'

// Locals
import Footer from '../components/Footer'
import { MainContainer } from '../components/shared/Containers'

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
  }
`

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps,
    }
  }

  render() {
    const {
      Component,
      pageProps,
      router: { route },
    } = this.props

    return (
      <MainContainer>
        <ThemeProvider theme={theme}>
          <>
            <Container>
              <Component {...pageProps} />
              <Footer />
            </Container>
          </>
        </ThemeProvider>
      </MainContainer>
    )
  }
}
