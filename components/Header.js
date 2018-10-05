import styled, { css } from 'styled-components'

// locals
import Nav from '../components/Nav'
import { Wrapper, ContentWrapper } from '../components/shared/Containers'
import SearchBox from '../components/searchBox/SearchBox'
import Space from '../components/shared/Space'

const Header = ({ mode }) => (
  <Container mode={mode}>
    <Wrapper>
      <Nav mode={mode}>{mode == 'movie' && <SearchBox mode={mode} />}</Nav>
      {mode == 'searchList' && (
        <>
          <ContentWrapper>
            <Space height="20" />
            <SearchBox secondMode />
            <Space height="20" />
          </ContentWrapper>
        </>
      )}
    </Wrapper>
  </Container>
)

export default Header

// Style
export const Container = styled.header`
  ${p =>
    p.mode == 'searchList' &&
    css`
      background: linear-gradient(180deg, #e0f3ee 0%, #f5f5f5 21.75%),
        linear-gradient(180deg, #1b82e1 0%, #3ac5d8 100%);
    `};

  ${p =>
    p.mode == 'movie' &&
    css`
      background: linear-gradient(180deg, #e0f3ee 0%, #f5f5f5 21.75%),
        linear-gradient(180deg, #1b82e1 0%, #3ac5d8 100%);
      min-height: 220px;
    `};
`
