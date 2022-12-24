import logo from './logo.svg';
import './App.css';
import './index.css'
import NavBar from  './NavBar/index';
import SideBar from './SideBar';
import Home from './Pages/HomePage';
import React, {useState, useEffect} from 'react';
import Signin from './Signin'
import Signout from './Signout'
import Employee from './Employee'
import Vaccine from './Pages/VaccinePage';
import Hospital from './Pages/HospitalPage';
import Emergency from './Pages/EmergencyPage';
import Admin from './Admin';
import User from './User';
import Services from './Pages/ServicesPage'
import Tracker from './Pages/TrackerPage/Tracker';

import { BrowserRouter as Router, NavLink, Route, Switch, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if(location.pathname === "/admin"){
    return (
        <Router>
          <Switch>
            <Route exact path="/admin"><Admin/></Route>
          </Switch>
        </Router>
    );
  }
  else{
    return(
      <Router>

        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>

      <Switch>
        <Route exact path="/home"><Home/></Route>
        <Route exact path="/services"><Services/></Route>
        <Route exact path="/hospital"><Hospital/></Route>
        <Route exact path="/vaccine"><Vaccine/></Route>
        <Route exact path="/tracker"><Tracker/></Route>
        <Route exact path="/userlogin"><User/></Route>
        <Route exact path="/emergency"><Emergency/></Route>
      </Switch>

      </Router>
  );
}
};



export default App;
