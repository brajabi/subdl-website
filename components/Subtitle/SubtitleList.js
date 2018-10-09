import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

// Locals
import Download from '../shared/Icons/Download'
import ArrowIcon from '../shared/Icons/ArrowIcon'

class SubtitleList extends Component {
  state = {
    isOpen: false,
  }
  render = () => (
    <Container>
      {/* subtitleFilter */}
      <LanguageSection>
        <LanguageTitle>
          <LangSymbol>EN</LangSymbol>
          English
        </LanguageTitle>
        <QulityList>
          <QulityRow>
            <QulityName
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              <ArrowWrapper isOpen={this.state.isOpen}>
                <ArrowIcon />
              </ArrowWrapper>
              <Name>Blue-Ray</Name>
              <MoreDetails>8 subtitle</MoreDetails>
            </QulityName>
            <Subtitles
              className="box"
              pose={this.state.isOpen ? 'open' : 'close'}
            >
              <SubtitleRow href="#">
                <DownloadWrapper>
                  <Download />
                </DownloadWrapper>
                Deadpool-2.2018.UNRATED..720p.BluRay.H264.AAC-RARBG (Writed By:
                FidelPerez)
              </SubtitleRow>
              <SubtitleRow href="#">
                <DownloadWrapper>
                  <Download />
                </DownloadWrapper>
                Deadpool-2.2018.UNRATED.PROPER.1080p.BluRay.H264.AAC-RARBG
                (Writed By: FidelPerez)
              </SubtitleRow>
            </Subtitles>
          </QulityRow>
        </QulityList>
      </LanguageSection>
    </Container>
  )
}
export default SubtitleList

// Posed
const Box = posed.div({
  close: {
    height: 0,
  },
  open: {
    height: 'auto',
  },
})

// Style
const Container = styled.div``

const LanguageSection = styled.div`
  margin-top: 30px;
`

const LanguageTitle = styled.h2`
  min-height: 30px;

  display: flex;
  align-items: center;

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.medium};
  font-weight: 400;
`

const LangSymbol = styled.span`
  padding: 3px;
  margin-right: 5px;

  font-family: ${p => p.theme.mainFont};
  font-size: 15px;

  /* background: #787cf9;
  color: #fff; */

  padding: 0 6px;
  height: 21px;
  line-height: 1;
  width: 29px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  border-radius: 3px;
  font-weight: 500;
  background: #e0e0e0;
  color: #2f2f2f;
  letter-spacing: 0.11em;
`

const QulityList = styled.div`
  margin-left: 10px;
`

const QulityRow = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
`

const QulityName = styled.h2`
  margin-bottom: 5px;
  display: flex;

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.Large};
  font-weight: 400;

  cursor: pointer;
`
const Name = styled.div`
  flex-grow: 1;
`

const MoreDetails = styled.div`
  font-style: italic;
  font-weight: 300;
  font-size: ${p => p.theme.small};

  color: #a59191;
`

const Subtitles = styled(Box)`
  /* max-height: 0; */
  overflow: hidden;
`

const SubtitleRow = styled.a`
  display: flex;
  align-items: center;
  line-height: 30px;

  text-decoration: none;
  color: #525151;
  transition: color 300ms;

  :hover {
    color: #000;
  }
`

const DownloadWrapper = styled.span`
  margin-right: 5px;
  font-size: 20px;
  color: #525151;
`

const ArrowWrapper = styled.span`
  margin-right: 5px;
  font-size: 13px;

  fill: #c4c4c4;
  /* transition: all 200ms; */

  svg {
    transition: all 200ms;
    transform: ${p => (p.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
`
