import styled, { css } from 'styled-components'

// Locals
import { mobile } from '../utils/media'

export const BackgroundImage = styled.div`
  background: url('../static/mainBackgrounds/logan.png');
  background-size: cover;

  position: absolute;
  width: 45%;
  height: auto;
  right: 0;
  top: 55px;
  bottom: 0;

  ${mobile(css`
    width: 55%;
    height: 50%;
    right: 0;
    top: auto;
    bottom: 0;
  `)};
`
