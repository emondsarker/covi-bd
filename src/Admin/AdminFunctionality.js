import {useContext} from 'react';
import {MyContext} from './MyContext';
import React, {useState, useEffect} from 'react';
import logo from '../NavBar/Logo/Logo.svg';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
import VaccineUpdate from './VaccineUpdate';
import HospitalUpdate from './HospitalUpdate';


function AdminFunctionalityMenu(){

    const {rootState1} = useContext(MyContext);
    const {theUser} = rootState1;

    function refreshPage(){
      // window.location.reload();
      //Need this or else the code doesnt work
      window.location.href="/home";
    }
    // If user Logged in

        return(


 <div className="statusGrid">
    <Grid item container className="statusContainer" spacing={4}>
        <Grid className="welcome_user" xs={12} ><p>Welcome</p> <h4>{theUser.name}</h4> <p> to Covi-BD</p></Grid>


        <Grid item sm={6} xs={12} className="statusGridCard" >
        <div className="statusDesc">
        <h5>Register Hospital</h5>
        <p>Register a new hospital for Covi-BD admin access</p>
        <p>Only Covi-BD admins can register new hospitals</p>
        <p>Contact us to have a new account registered</p>
        </div>
        <NavLink className="statusLinks" to='/admin/registernewadmin'> Register </NavLink>
        </Grid>

        <Grid item sm={6} xs={12} className="statusGridCard" >
        <div className="statusDesc">
        <h5>Update Covid News</h5>
        <p>Add a snippet containing Covid-19 news.</p>
        <p>Must include a header, sub-header and image.</p>
        <p>A link to the source must also be given</p>
        </div>
        <NavLink className="statusLinks" to='/admin/addnews'> Add News </NavLink>
        </Grid>

        <Grid item sm={6} xs={12}  className="admin_card">
          <VaccineUpdate/>
        </Grid>
        <Grid item sm={6} xs={12} className="admin_card">
          <HospitalUpdate/>
        </Grid>

<Grid xs={12}> <br/><br/><br/> </Grid>
        <Grid item sm={4} xs={6} className="statusGridCard">
        <div className="statusDesc">
        <h5>Place Holder</h5>
        <p>Write down a brief description of Covi-BD admin function.</p>
        </div>
        <NavLink className="statusLinks" exact activeClassName="active_class" to='/status/genetic'> Place holder </NavLink>
        </Grid>

        <Grid item sm={4} xs={6} className="statusGridCard">
        <div className="statusDesc">
        <h5>Place Holder</h5>
        <p>Write down a brief description of Covi-BD admin function.</p>
        <NavLink className="statusLinks" exact activeClassName="active_class" to='/status/mental'> Place holder </NavLink>
          </div>
        </Grid>


        <Grid item sm={4} xs={6} className="statusGridCard">
        <div className="statusDesc">
        <h5>Place Holder</h5>
        <p>Write down a brief description of Covi-BD admin function.</p>
        <NavLink className="statusLinks" to='/status/cardiac'> Place holder </NavLink>
        </div>
        </Grid>


  </Grid>
  </div>

        )

}

export default AdminFunctionalityMenu;
