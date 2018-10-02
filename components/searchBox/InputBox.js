import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

// Locals
import SearchIcon from '../shared/SearchIcon'

const InputBox = ({ fullWidth = null }) => (
  <Container fullWidth={fullWidth}>
    <Input
      type="text"
      name="search"
      placeholder="Search for movies, TV series, films, etc"
      autoComplete="off"
    />
    <SearchButton type="submit">
      <ButtenText id="search">Search</ButtenText>
      <ButtonIcon aria-labelledby="search">
        <SearchIcon />
      </ButtonIcon>
    </SearchButton>
  </Container>
)

export default InputBox

// Styles
const Container = styled.div`
  display: flex;

  ${p =>
    !p.fullWidth &&
    css`
      max-width: 572px;
    `};
  height: 50px;

  background: #ffffff;
  border: 1px solid #d7d7d7;
  box-sizing: border-box;
`

const Input = styled.input`
  flex-grow: 1;

  padding: 10px 15px;
  outline: none;
  border: none;

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.meduim};
  color: #969696;

  ${mobile(css`
    font-size: ${p => p.theme.normal15};
  `)};
`

const SearchButton = styled.button`
  display: block;
  height: 36px;
  margin: 7px 9px;
  padding: 0 8px;

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.normal};
  letter-spacing: 0.13em;

  cursor: pointer;
  color: #000000;
  text-align: center;
  line-height: 2.5;
  background: #ffea52;
  border: none;
  outline: none;
`

const ButtenText = styled.span`
  ${mobile(
    css`
      display: none;
    `,
  )};
`

const ButtonIcon = styled.span`
  display: none;
  padding-top: 5px;

  ${mobile(
    css`
      display: block;
    `,
  )};
`
