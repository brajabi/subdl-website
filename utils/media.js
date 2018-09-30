import { css } from 'styled-components'

export const mobileMediaString = `(max-width: 800px)`
export const notMobileMediaString = `(min-width: 800px)`

export const mobile = body => css`
  @media (max-width: 800px) {
    ${body};
  }
`

export const notMobile = body => css`
  @media (min-width: 800px) {
    ${body};
  }
`

export const tablet = body => css`
  @media (min-width: 800px) and (max-width: 1024px) {
    ${body};
  }
`

export const desktop = body => css`
  @media (min-width: 1024px) {
    ${body};
  }
`

export const retina = body => css`
  @media only screen and (-webkit-min-device-pixel-ratio: 1.25),
    only screen and (min--moz-device-pixel-ratio: 1.25),
    only screen and (-o-min-device-pixel-ratio: 1.25/1),
    only screen and (min-device-pixel-ratio: 1.25),
    only screen and (min-resolution: 200dpi),
    only screen and (min-resolution: 1.25dppx) {
    ${body};
  }
`
