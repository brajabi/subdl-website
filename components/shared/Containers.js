import styled, { css } from 'styled-components'

// Utils
import { largeDescktop } from '../../utils/media'

export const MainContainer = styled.div`
  height: 100%;
  margin: 0px auto;
  overflow: hidden;
  padding-bottom: 30px;
`

export const Wrapper = styled.div`
  overflow: hidden;
  padding: 0 35px;
`

export const ContentWrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;

  ${largeDescktop(css`
    max-width: 1200px;
  `)};
`
