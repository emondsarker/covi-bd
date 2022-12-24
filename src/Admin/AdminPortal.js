import {useContext} from 'react'
import {MyContext} from './MyContext'
import React, {useState, useEffect} from 'react';
import AdminLogin from './AdminLogin'
import AddNews from './AddNews'
import AdminRegister from './AdminRegistration'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { BrowserRouter as Router, NavLink, Route, Switch, useLocation } from "react-router-dom";
import {Nav, NavbarContainer, NavLogo, MobileIcon,
NavMenu, NavItems, NavLinks, NavItem,
NavBtn, NavBtn2, NavBtnLink, NavBtnLink2} from '../NavBar/NavBarElements';
import logo from '../NavBar/Logo/Logo.svg';
import Grid from '@material-ui/core/Grid';
import AdminFunctionalityMenu from './AdminFunctionality';
import RegisterNewAdmin from './RegisterNewAdmin';
import VaccineUpdate from './VaccineUpdate'


function AdminPortal(){

    const {rootState1,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState1;

    function refreshPage(){
      // window.location.reload();
      //Need this or else the code doesnt work
      window.location.href="/home";
    }
    // If user Logged in
    if(isAuth)
    {
        return(
          <div>
            <Nav>
              <NavbarContainer>
                <NavLogo to="/home"><img src={logo} ></img> <p>Covi-BD</p></NavLogo>
              <NavMenu>

              <h1>Administration</h1>
              </NavMenu>
              <NavBtn2>
                <NavBtnLink onClick={logoutUser}>LOG OUT</NavBtnLink>
              </NavBtn2>
              </NavbarContainer>
              </Nav>



          <Router>

          <Switch>
            <Route exact path="/admin"><AdminFunctionalityMenu/></Route>
            <Route exact path="/admin/registernewadmin"><RegisterNewAdmin/></Route>
            <Route exact path="/admin/addnews"><AddNews/></Route>
          </Switch>

          </Router>
            </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <AdminLogin/>;
    }
    else{
        return <AdminRegister/>;
    }

}

export default AdminPortal;
