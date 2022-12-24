import React, { useState, useContext } from 'react'
import {FaBars} from 'react-icons/fa';
import {MyContext} from '../User/MyContext';
import {Nav, NavbarContainer, NavLogo, MobileIcon,
NavMenu, NavItems, NavLinks, NavItem,
NavBtn, NavBtnLink, NavBtnLink2, AccountCircle} from './NavBarElements';
import logo from './Logo/Logo.svg';
import Modal from 'react-modal';
import User from '../User';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const NavBar = ({ toggle }) => {

  const loginToken = localStorage.getItem('loginToken1');
  let loggedIn = false;
  // If inside the local-storage has the JWT token
  if(loginToken){
    loggedIn = true;
  }else{
    loggedIn = false
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalStyle = {
    content: {
      top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height:'400px'
    }
  };
  return(
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/home"><img src={logo}/> <p>Covi-BD</p> </NavLogo>

            <NavBtnLink2 to='/emergency'> EMERGENCY</NavBtnLink2>

          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks activeClassName="any" to="/home"><HomeIcon fontSize="small"/> Home </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services"><FormatListBulletedIcon fontSize="small"/> Services </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/hospital"><LocalHospitalIcon fontSize="small"/> Hospital </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/vaccine"><FavoriteIcon fontSize="small"/> Vaccine </NavLinks>
            </NavItem>


          </NavMenu>
          <NavBtn>
            <AccountCircle fontSize="large" onClick={()=>setModalIsOpen(true)}/>
            <NavBtnLink to='/emergency'>EMERGENCY</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <div className="user_modal">
      <Modal isOpen={modalIsOpen} style={modalStyle}>
      <div className="modal_close_icon">
        <CloseIcon onClick={()=>setModalIsOpen(false)}> CLOSE MEEEE </CloseIcon>
        </div>
          <User/>
      </Modal>

      </div>
    </>
  )
}

export default NavBar;
