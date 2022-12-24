import {useContext} from 'react'
import {MyContext} from './MyContext'
import React, {useState, useEffect} from 'react';
import logo from '../NavBar/Logo/Logo.svg';
import accessgranted from './Images/Access Granted.JPG';
import accessdenied from './Images/Access Denied.JPG';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
import AdminRegistration from './AdminRegistration';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


function RegisterNewAdmin(){

    const {rootState1,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState1;

    function refreshPage(){
      // window.location.reload();
      //Need this or else the code doesnt work
      window.location.href="/home";
    }
    function goBack(){
      window.location.href="/admin";
    }
    // If user Logged in

    const adminUser = {
      email: "emon331@gmail.com",
      password: "admin123"
    }
    const [user, setUser]=useState({name:"",password:""});
    const [error, setError]=useState("");
    const [expand, setExpand] = useState(false);

    useEffect(()=>{
      if(adminUser.email===theUser.email){
        setExpand(true);
        console.log("teehee");
      }
    });


return(
<>
{expand?
<div>
     <div className="statusGrid">
       <Grid item container className="statusContainer">
          <Grid item xs="12"> <div class="sub_section_header">
          <button className="button3" onClick={()=>{goBack()}} > <ArrowBackIcon/></button>
           <h3>Register A Hospital</h3>
           </div> </Grid>
        <Grid item sm="6" xs="12"> <img src={accessgranted} className="login_logo2"/> </Grid>
        <Grid item sm="6" xs="12"> <AdminRegistration/> </Grid>
        </Grid>
      </div>
</div> :
<div>
     <div className="statusGrid">
       <Grid item container className="statusContainer">
          <Grid item xs="12"> <div class="sub_section_header">
          <button className="button3" onClick={()=>{goBack()}} > <ArrowBackIcon/></button>
           <h3>Error: Invalid Cred.</h3>
           </div> </Grid>
        <Grid item  xs="12"> <img src={accessdenied} className="login_logo3"/>
        </Grid> </Grid>
      </div>
</div> }
</>
        )

}

export default RegisterNewAdmin;
