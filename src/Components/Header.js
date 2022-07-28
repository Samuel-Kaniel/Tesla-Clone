import React from 'react'
import styled from 'styled-components';
import log from '../images/logo.svg'

function Header() {
  return (
    <Container>
      <a href="#">
        <img src={log} alt="" />
      </a>

      {/* Menu */}
      <Menu>
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model Y</a></p>
        <p><a href="#">Solar Roof</a></p>
        <p><a href="#">Solar Panel</a></p>
      </Menu>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px
`

const Menu = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`