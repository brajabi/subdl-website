import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'

// Utils
import { mobile } from '../../utils/media'

// Locals
import SearchIcon from '../shared/SearchIcon'
import AutoComplete from './AutoComplete'

class InputBox extends Component {
  state = {
    autoCompleteRequest: false,
    inputValue: '',
    sourceRequest: null,
    movieList: {},
  }

  componentDidMount = () => {}

  getAutoCompleteList = query => {
    if (this.state.sourceRequest)
      this.state.sourceRequest.cancel('Operation canceled by the user.')

    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    this.setState({ sourceRequest: source })

    axios
      .get(`https://api.subdl.com/v1/autoComplete/${encodeURI(query)}`, {
        cancelToken: source.token,
      })
      .then(res => {
        console.log(res.data.results)
        this.setState({
          movieList: res.data.results.slice(0, 5),
          autoCompleteRequest: true,
        })
      })
  }

  inputOnChanged = event => {
    const newValue = event.currentTarget.value
    this.setState({ inputValue: newValue })

    if (newValue.length >= 3) {
      this.getAutoCompleteList(newValue)
    }
  }

  render = () => {
    const { mode } = this.props

    return (
      <Container mode={mode}>
        <Input
          type="text"
          name="search"
          placeholder="Search for movies, TV series, films, etc"
          autoComplete="off"
          mode={mode}
          value={this.state.inputValue}
          onChange={this.inputOnChanged}
        />
        <SearchButton type="submit">
          <ButtenText id="search">Search</ButtenText>
          <ButtonIcon aria-labelledby="search">
            <SearchIcon />
          </ButtonIcon>
        </SearchButton>
        {this.state.autoCompleteRequest && (
          <AutoComplete movieList={this.state.movieList} />
        )}
      </Container>
    )
  }
}

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
