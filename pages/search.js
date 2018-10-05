import styled from 'styled-components'

// Locals
import Header from '../components/Header'
import { Wrapper, ContentWrapper } from '../components/shared/Containers'
import Space from '../components/shared/Space'

import { MovieRowWithPoster, MovieRow } from '../components/shared/MovieItems'

const Search = () => {
  const query = 'black panther'

  return (
    <>
      <Header mode="searchList" />
      <Wrapper>
        <ContentWrapper>
          <SearchList>
            <ResultTitle>
              Matches <span>(3 results)</span>
            </ResultTitle>

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

            <ResultTitle>
              Other results <span>(22 results)</span>
            </ResultTitle>

            <MovieRow
              title="BBC Inside the Perfect Predator"
              year="2010"
              subtitleCount="50"
            />
            <MovieRow
              title="LEGO Marvel Super Heroes - Black Panther: Trouble in Wakanda"
              year="2018"
              subtitleCount="3"
            />
            <MovieRow
              title="Black Knight (Black Knight: The Man Who Guards Me / Heukgisa)"
              year="1998"
              subtitleCount="50"
            />
            <MovieRow
              title="Black Lightning - First Season"
              year="2018"
              subtitleCount="3"
            />
            <MovieRow
              title="The Black Moon (คืน เดือน ดับ)"
              year="2018"
              subtitleCount="3"
            />
          </SearchList>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default Search

// Style
const SearchList = styled.div``

const ResultTitle = styled.div`
  margin-top: 50px;
  margin-bottom: 25px;

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.normal}px;
  font-weight: 400;

  color: #909090;

  span {
    color: #cacaca;
    font-weight: 300;
  }
`
