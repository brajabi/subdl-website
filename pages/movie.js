import styled from 'styled-components'

// Locals
import Header from '../components/Header'
import { Wrapper, ContentWrapper } from '../components/shared/Containers'
import Space from '../components/shared/Space'
import SubtitleList from '../components/Subtitle/SubtitleList'

const Movie = () => {
  const query = 'black panther'

  return (
    <>
      <Header mode="movie" />
      <Wrapper>
        <StyledContentWrapper>
          <Side>
            <Poster>
              <img src="https://subdl.com/p/sd2/sd2922.jpg" />
            </Poster>
            <Space height="10" />
            <MovieDetails>
              <div>
                IMDB 7.8/10
                <br />
                Ganre: action, sifi
              </div>
            </MovieDetails>
          </Side>
          <MovieData>
            <Space height="57" />
            <MoiveTitle>
              Black Panther
              <MovieYear>(2017)</MovieYear>
            </MoiveTitle>
            <SubtitleListWrapper>
              <SubtitleList />
            </SubtitleListWrapper>
          </MovieData>
        </StyledContentWrapper>
      </Wrapper>
    </>
  )
}

export default Movie

// Style

const StyledContentWrapper = styled(ContentWrapper)`
  display: flex;

  margin-top: -100px;
`

const Side = styled.div`
  width: 120px;
`

const Poster = styled.div`
  width: 120px;
  height: 180px;
  overflow: hidden;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  img {
    width: 100%;
  }
`

const MovieData = styled.div`
  flex-grow: 1;
  margin-left: 30px;
`

const MoiveTitle = styled.h2`
  padding: 0;
  margin: 0;

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.XLarge};
  font-weight: 500;

  color: #000000;
`

const MovieYear = styled.span`
  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.XLarge};

  color: #a0a0a0;
  ::before {
    content: ' ';
  }
`

const SubtitleListWrapper = styled.div``

const MovieDetails = styled.div`
  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.normal};
  font-weight: 400;
  line-height: 19px;

  color: #939393;
`
