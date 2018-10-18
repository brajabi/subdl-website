import styled, { css } from 'styled-components'

const AutoComplete = ({ movieList }) => (
  <Container>
    {movieList.map(movieData => (
      <MovieItem>
        <Poster src={movieData.orginal_poster} />
        <Title>
          {movieData.name} ({movieData.year})
          <MovieKind>{movieData.type}</MovieKind>
        </Title>
      </MovieItem>
    ))}
  </Container>
)

export default AutoComplete

// Style

const Container = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 49px;

  background: #fff;
  /* border: 1px solid #ccc; */
  border-top: none;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`

const Poster = styled.div`
  width: 40px;
  height: 57px;

  background: url('${p => p.src}') no-repeat;
  background-size: cover;
`

const Title = styled.div`
  padding: 10px 10px 10px 10px;
  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.normal15};
`

const MovieKind = styled.small`
  display: block;
  color: #a09e9e;

  ${p =>
    p.inline &&
    css`
      display: inline-block;
      font-style: italic;
      margin-left: 3px;
    `};
`

const MovieItem = styled.div`
  min-height: 40px;
  display: flex;
  cursor: pointer;

  margin-bottom: 1px;
  padding-bottom: 1px;
  border-bottom: 1px solid #f1f0f0;

  :last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  ${p =>
    p.inline &&
    css`
      ${Title} {
        flex-grow: 1;
        /* display: flex; */
        /* justify-content: space-between; */
      }
      ${MovieKind} {
        display: inline-block;
        margin-left: 3px;
        font-style: italic;
        font-size: 12px;
      }
    `};

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`
