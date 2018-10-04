import styled from 'styled-components'

// Locals
import Header from '../components/Header'
import { Wrapper } from '../components/shared/Containers'
import Space from '../components/shared/Space'

import { MovieRowWithPoster } from '../components/shared/MovieItems'

const Search = () => {
  const query = 'black panther'

  return (
    <>
      <Header secondMode />
      <Wrapper>
        {/* <Space height="50" /> */}
        <SearchList>
          <ResultTitle>Matches (3 results)</ResultTitle>

          <MovieRowWithPoster
            poster="https://subdl.com/p/sd1/sd1005.jpg"
            title="Deadpool 2"
            year="2018"
            type="Movie"
            subtitleCount="219"
          />
          <MovieRowWithPoster
            poster="https://subdl.com/p/sd1/sd1270.jpg"
            title="Black Panther"
            year="2017"
            type="TV"
            subtitleCount="500"
          />
          <MovieRowWithPoster
            poster="https://subdl.com/p/sd2/sd2922.jpg"
            title="Inception"
            year="2010"
            type="Movie"
            subtitleCount="50"
          />

          <ResultTitle>Other results (22 results)</ResultTitle>
        </SearchList>
      </Wrapper>
    </>
  )
}

export default Search

// Style
const SearchList = styled.div`
  padding-left: 20px;
`

const ResultTitle = styled.div`
  margin-top: 50px;
  margin-bottom: 25px;

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.normal}px;
  font-weight: 400;

  color: #909090;
`
