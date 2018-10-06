import styled, { css } from 'styled-components'

// Locals
import BoltIcon from '../shared/BoltIcon'

const ChooseLanguage = () => (
  <Wrapper>
    <BoltIcon />
    <Title>Choose Language</Title>
  </Wrapper>
)

export default ChooseLanguage

// Styles
const Wrapper = styled.div`
  width: 100%;
  min-height: 20px;

  display: flex;
  align-items: center;
  margin-top: 9px;
  flex-wrap: wrap;

  cursor: pointer;
  path {
    fill: #6a6a6a;
  }
`

const Title = styled.span`
  margin-left: 5px;
  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.small};
  font-style: italic;
  font-weight: 300;

  color: #6a6a6a;
`
