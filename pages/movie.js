import styled from 'styled-components'

// Locals
import Header from '../components/Header'
import { Wrapper, ContentWrapper } from '../components/shared/Containers'
import Space from '../components/shared/Space'

const Movie = () => {
  const query = 'black panther'

  return (
    <>
      <Header mode="movie" />
      <Wrapper>
        <ContentWrapper />
      </Wrapper>
    </>
  )
}

export default Movie
