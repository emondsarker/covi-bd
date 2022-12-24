import React, {useState, useEffect} from 'react';
import {useContext} from 'react'
import {MyContext} from './MyContext'
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
 import Axios from 'axios';
 import './Admin.css';

const Shit = () => {
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
// <h1>{data.map((item, index)=>{return <h1>{item.CenterName}</h1>})}</h1>
// <table id="hospital">
// <thead>
// <tr>
//     <th colspan="0">Name of center</th>
//     <th colspan="0">Vaccine Type</th>
//     <th colspan="0">Status</th>
//     <th colspan="0">Daily Dose Available</th>
//     <th colspan="0">Daily Dose Administered</th>
//     <th colspan="0">Special Info </th>
// </tr>
//
// </thead>
// <tbody>
// {data.map((item, index) => {
// return <tr className="tableCard" key={index}>
//     <td className="td">{item.CenterName}</td>
//     <td className="td">{item.VaccineType}</td>
//     <td className="td">{item.Status}</td>
//
//     <td className="td">{item.DailyDoseAvailable}</td>
//     <td className="td">{item.DailyDoseGiven}</td>
//     <td className="td">{item.SpecialInfo}</td>
// </tr>
// })}
// </tbody>
// </table>
export default Shit;
