import React from 'react'
import styled from 'styled-components'

// Locals
import Logo from './shared/Logo'

const Nav = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <StyledNav>
      <NavItems href="#">discover</NavItems>
      <NavItems href="#">popular</NavItems>
      <NavItems href="#">latest Movies</NavItems>
    </StyledNav>
    <RightNav>
      <NavItems href="#">login</NavItems>
      <BetweenText>or</BetweenText>
      <NavItems href="#">signup</NavItems>
    </RightNav>
  </HeaderContainer>
)

export default Nav

const HeaderContainer = styled.header`
  display: flex;
`

const LogoContainer = styled.div``

const StyledNav = styled.nav`
  flex-grow: 1;

  display: flex;
  align-items: flex-end;
  padding: 0 30px 10px;
`

const RightNav = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
`

const NavItems = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: ${p => p.theme.dark};

  font-family: ${p => p.theme.mainFont};
  font-size: 14px;
`

const BetweenText = styled.div`
  margin: 0 19px;
`
