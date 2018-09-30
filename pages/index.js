import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../utils/media'

// Locals
import SearchBox from '../components/searchBox/SearchBox'
import { BackgroundImage } from '../components/BackgroundImage'

const Index = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <MainTitle>
          <strong>Find perfect subtitles</strong> in any language for any movie!
        </MainTitle>
        <SearchBox />
      </ContentWrapper>
      <BackgroundImage />
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  max-width: 560px;
  margin-top: 115px;
  margin-left: 40px;

  position: relative;
  z-index: 100;

  ${mobile(css`
    margin-top: 30px;
    margin-left: 0;
  `)};
`

const MainTitle = styled.h1`
  font-family: ${p => p.theme.mainFont};
  font-style: normal;
  font-weight: 300;
  font-size: ${p => p.theme.XXLarge};

  color: #000000;
  text-shadow: 2px 4px 0px #ffffff, 2px 3px 0px #ffffff;

  strong {
    font-weight: 900 !important;
  }

  ${mobile(css`
    font-size: ${p => p.theme.XLarge};
  `)};
`
