import styled from 'styled-components'

const Space = ({ height }) => <StyledSpace height={height} />

export default Space

// Style
const StyledSpace = styled.div`
  width: 100%;
  height: ${p => p.height}px;
`
