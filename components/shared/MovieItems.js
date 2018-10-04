import styled, { css } from 'styled-components'

export const MovieRowWithPoster = ({
  poster,
  title,
  year,
  type,
  subtitleCount,
}) => (
  <RowWrapper>
    <Poster>
      <MovieLink href="#">
        <img src={poster} />
      </MovieLink>
    </Poster>

    <MovieDetails>
      <MovieTitle>
        <MovieLink href="#">
          {title}
          <Year>({year})</Year>
        </MovieLink>
      </MovieTitle>

      <MovieLink href="#">
        <TypeTag>{type}</TypeTag>
        <Subtitle>{subtitleCount} subtitles</Subtitle>
      </MovieLink>
    </MovieDetails>
  </RowWrapper>
)

export const MovieRow = ({ title, year, subtitleCount }) => (
  <RowWrapper column>
    <MovieTitle biggerFontSize>
      <MovieLink href="#">
        {title}
        <Year>({year})</Year>
      </MovieLink>
    </MovieTitle>

    <MovieLink href="#">
      <Subtitle>{subtitleCount} subtitles</Subtitle>
    </MovieLink>
  </RowWrapper>
)

// Style
const RowWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  ${p =>
    p.column &&
    css`
      flex-direction: column;
    `};
`

const Poster = styled.div`
  width: 53px;
  height: 80px;

  border-radius: 3px;
  overflow: hidden;

  img {
    width: 100%;
  }
`

const MovieLink = styled.a`
  display: block;

  text-decoration: none;
  color: inherit;
`

const MovieDetails = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-left: 20px;
`

const MovieTitle = styled.h2`
  font-family: ${p => p.theme.mainFont};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  color: #10141d;
  font-size: ${p => (p.biggerFontSize ? p.theme.meduim : p.theme.normal15)};
  font-weight: ${p => (p.biggerFontSize ? 500 : 400)};
`
const Year = styled.span`
  font-size: ${p => p.theme.normal};
  ::before {
    content: ' ';
  }
`

const TypeTag = styled.span`
  padding: 2px 4px;
  font-size: ${p => p.theme.smaller};

  background: #d1cccc;
  color: #fff;
`

const Subtitle = styled.span`
  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.smaller};
  font-style: italic;
  font-weight: 300;
  line-height: normal;

  color: #7e7e7e;

  ::before {
    content: ' ';
  }
`
