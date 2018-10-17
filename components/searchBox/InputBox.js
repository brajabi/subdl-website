import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

// Locals
import SearchIcon from '../shared/SearchIcon'
import AutoComplete from './AutoComplete'




const InputBox = ({ mode }) => (
  <Container mode={mode}>
    <Input
      type="text"
      name="search"
      placeholder="Search for movies, TV series, films, etc"
      autoComplete="off"
      mode={mode}
    />
    <SearchButton type="submit">
      <ButtenText id="search">Search</ButtenText>
      <ButtonIcon aria-labelledby="search">
        <SearchIcon />
      </ButtonIcon>
    </SearchButton>
    <AutoComplete />
  </Container>
)

export default InputBox

// Styles
const Container = styled.div`
  display: flex;
  position: relative;

  max-width: ${p => (!p.mode ? '572px' : '650px')};
  height: ${p => (!p.mode ? '50px' : p.mode == 'movie' ? '40px' : '40px')};
  margin: 2px;

  background: #ffffff;
  border: 1px solid #d7d7d7;
  box-sizing: border-box;

  /* TEST */
  /* border: 1px solid #e3e3e3; */
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
`

const Input = styled.input`
  flex-grow: 1;

  padding: 10px 15px;
  outline: none;
  border: none;

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => (p.mode != 'movie' ? p.theme.medium : p.theme.normal15)};
  color: #969696;

  ${mobile(css`
    font-size: ${p => p.theme.normal15};
  `)};
`

const SearchButton = styled.button`
  display: flex;
  align-items: center;

  display: block;
  max-height: 36px;
  margin: 7px 9px;
  /* padding: 0 8px; */

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.normal};
  letter-spacing: 0.13em;

  cursor: pointer;
  color: #000000;
  text-align: center;
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

  ${mobile(
    css`
      display: block;
    `,
  )};
`
