import styled, { css } from 'styled-components'

// Locals
import BoltIcon from '../shared/BoltIcon'

const Trends = () => (
  <Wrapper>
    <BoltIcon />
    <Title>trending in India:</Title>
    <TrendList>
      <TrendItem href="#">Rogue One 2016</TrendItem>
      <TrendItem href="#">Arrival</TrendItem>

      <TrendItem href="#" commaFalse>
        discover more...
      </TrendItem>
    </TrendList>
  </Wrapper>
)

export default Trends

// Styles
const Wrapper = styled.div`
  width: 100%;
  min-height: 20px;

  display: flex;
  align-items: center;
  margin-top: 9px;
  flex-wrap: wrap;
`

const Title = styled.span`
  margin-left: 5px;
  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.small};
  font-style: italic;
  font-weight: 300;

  color: #bdbdbd;
`

const TrendList = styled.div``

const TrendItem = styled.a`
  margin-left: 10px;
  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.small};
  font-weight: 300;

  color: #bdbdbd;
  text-decoration: none;

  text-shadow: 1px 2px 0px #ffffff, 1px 2px 0px #ffffff;

  ${p =>
    !p.commaFalse &&
    css`
      &:after {
        content: ',';
      }
    `};
`
