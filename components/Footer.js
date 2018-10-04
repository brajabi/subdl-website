import styled, { css } from 'styled-components'

// Locals
import { mobile } from '../utils/media'

const Footer = () => (
  <Wrapper>
    <ChooseLanguage>Subtitle Lanuage</ChooseLanguage>
    <Nav>
      <NavItem href="#">Privacy Policy</NavItem>
      <NavItem href="#">Developers</NavItem>
      <NavItem href="#">SUBDL. All rights</NavItem>
    </Nav>
  </Wrapper>
)

export default Footer

// Style
const Wrapper = styled.div`
  position: fixed;
  bottom: 5px;
  left: 35px;
  right: 35px;

  width: auto;
  min-height: 20px;

  display: flex;
  align-items: center;
`

const ChooseLanguage = styled.button`
  border: none;
  padding: 3px 5px;
  border-radius: 3px;
  background: #e6dfdf;
  color: #333;
`

const Nav = styled.nav`
  display: flex;

  ${mobile(css`
    display: none;
  `)};
`

const NavItem = styled.a`
  margin-left: 20px;

  font-family: ${p => p.theme.mainFont};
  font-size: ${p => p.theme.smaller};
  font-weight: 400;
  text-decoration: none;

  color: #828282;
`
