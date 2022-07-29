import React, { useState } from 'react'
import styled from 'styled-components';
import log from '../images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';




function Header() {

  const [ burgerStatus, setBurgerStatus] = useState(false);

  

  return (
    <Container>
      <a href="#">
        <img src={log} alt="" />
      </a>

      {/* Menu */}
      <Menu>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </Menu>

      <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomeClose onClick={() => setBurgerStatus(false)} />
        </CloseWrap>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Powerwall</a></li>        
  
      </BurgerNav>

      
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color:#b5b1ec;
	box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);
  opacity: 0.65;

	@media(max-width: 400px){
		min-height: 40px;
		padding: 0 10px;
		a{
			img{
				width: 75px;
			}
		}
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;    
  }
  a:hover{
      transition: 0.1s ease-in-out;
      font-size: 14px;
      text-transform: capitalize;
    }

  @media(max-width: 768px){
    display: none;

  }
  
`

const RightMenu = styled.div`
      display: flex;
      align-items: center;
      a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
      }
      a:hover{
      transform: 0.1s ease-in;
      font-size: 14px;
      text-transform: capitalize;
    }

`

const CustomMenu = styled(MenuIcon)`
      cursor: pointer;
      
`

const BurgerNav = styled.div`
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      background: #b5b1ec;
      width: 300px;
      z-index: 16;
      list-style: none;
      padding: 20px;
      display: flex;
      flex-direction: column;
      text-align: start;
      transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.2s ease-in;
      li{
        padding: 15px;
        border: 1px solid rgba(0,0,0,0.1);
        align-items: center;
          a{
            font-weight: 600px;
          }
          a:hover{
            font-weight: bold;
            -webkit-transform: scale(1.3);
            -ms-transform: scale(1.3);
            transform: scale(1.3);
          }
      }
`


const CustomeClose = styled(CloseIcon)`
      cursor: pointer;
`
const CloseWrap = styled.div`
      display: flex;
      justify-content: flex-end;
`