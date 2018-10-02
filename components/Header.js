import styled, { css } from 'styled-components'

// locals
import Nav from '../components/Nav'
import { Wrapper } from '../components/shared/Containers'
import SearchBox from '../components/searchBox/SearchBox'
import Space from '../components/shared/Space'

const Header = ({ secondMode }) => (
  <Container secondMode={secondMode}>
    <Wrapper>
      <Nav secondMode />
      {secondMode && (
        <>
          <Space height="20" />
          <SearchBox fullWidth />
          <Space height="20" />
        </>
      )}
    </Wrapper>
  </Container>
)

export default Header

// Style
export const Container = styled.header`
  ${p =>
    p.secondMode &&
    css`
      background: linear-gradient(180deg, #1b82e1 0%, #3ac5d8 100%);
    `};
`
