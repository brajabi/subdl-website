import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import Logo from './shared/Logo'
import { mobile } from '../utils/media'

const Nav = ({ secondMode }) => (
  <HeaderContainer secondMode={secondMode}>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <StyledNav>
      <NavItems href="#">discover</NavItems>
      <NavItems href="#">popular</NavItems>
      <NavItems href="#">latest movies</NavItems>
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

  ${p =>
    p.secondMode &&
    css`
      a {
        color: #fff;
      }
    `};
`

const LogoContainer = styled.div``

const StyledNav = styled.nav`
  flex-grow: 1;

  display: flex;
  align-items: flex-end;
  padding: 0 0 10px 30px;
  flex-wrap: wrap;
  overflow: hidden;

  ${mobile(css`
    a:nth-child(3) {
      display: none;
    }
  `)};
`

const NavItems = styled.a`
  margin-right: 15px;
  text-decoration: none;
  color: ${p => p.theme.dark};

  font-family: ${p => p.theme.mainFont};
  font-size: 14px;
  letter-spacing: 0.1em;
`

const RightNav = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;

  ${mobile(css`
    display: none;
  `)};

  a:last-child {
    margin-right: 0;
  }
`

const BetweenText = styled.div`
  margin: 0 19px;
`
