import React from 'react'
import App, { Container } from 'next/app'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

// Utils
import theme from '../utils/theme'

// Locals
import Nav from '../components/Nav'
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
    const { Component, pageProps } = this.props

    return (
      <MainContainer>
        <ThemeProvider theme={theme}>
          <>
            <Container>
              <Nav />
              <Component {...pageProps} />
            </Container>
          </>
        </ThemeProvider>
      </MainContainer>
    )
  }
}
