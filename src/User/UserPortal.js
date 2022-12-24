import {useContext} from 'react'
import {MyContext} from './MyContext'
import React, {useState, useEffect} from 'react';
import UserLogin from './UserLogin'
import UserRegister from './UserRegistration'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { BrowserRouter as Router, NavLink, Route, Switch, useLocation } from "react-router-dom";
import {Nav, NavbarContainer, NavLogo, MobileIcon,
NavMenu, NavItems, NavLinks, NavItem,
NavBtn, NavBtn2, NavBtnLink, NavBtnLink2} from '../NavBar/NavBarElements';
import logo from '../NavBar/Logo/Logo.svg';
import Grid from '@material-ui/core/Grid';

function UserPortal(){

    const {rootState2,logoutUser} = useContext(MyContext);
    const {isAuth2,theUser,showLogin} = rootState2;

    function refreshPage(){
      // window.location.reload();
      //Need this or else the code doesnt work
      window.location.href="/home";
    }
    // If user Logged in
    if(isAuth2)
    {
        return(
          <div className="center_modal">

              <br/><br/><br/><br/><br/><br/>
              <h3>Logged in as: </h3>
              <h3>{theUser.name}</h3>
              <br/>
              <NavBtn2>
                <NavBtnLink onClick={logoutUser}>LOG OUT</NavBtnLink>
              </NavBtn2>
            </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <UserLogin/>;
    }
    else{
        return <UserRegister/>;
    }

}

export default UserPortal;
