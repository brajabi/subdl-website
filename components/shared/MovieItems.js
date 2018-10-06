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

const Poster = styled.div`
  width: 60px;
  height: 90px;

  overflow: hidden;
  border-radius: 3px;
  transition: box-shadow 200ms, transform 200ms, opacity 200ms;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  opacity: 0.9;
  transform: scale(1, 1);

  img {
    width: 100%;
  }
`

const MovieLink = styled.a`
  display: inline-block;

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
  font-size: ${p => p.theme.normal15};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  color: #10141d;

  :hover {
    color: #050a13;
  }
`
const Year = styled.span`
  font-size: ${p => p.theme.normal};
  color: #545454;

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

const RowWrapper = styled.div`
  width: 100%;
  margin-bottom: 18px;
  /* padding-left: 15px; */

  display: flex;
  ${p =>
    p.column &&
    css`
      flex-direction: column;
    `};

  :hover ${Poster} {
    opacity: 1;
    transform: scale(1.1, 1.1);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);
  }
`
