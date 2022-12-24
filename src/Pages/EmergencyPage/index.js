import React, { useState, useEffect } from 'react';
import SearchArea from '../../SearchArea';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import {HomeIntro, HomeAbout, StartBtn, StartBtnLink} from './HomePageElements'
import Axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
//HomePage
import './emergency.css'
import CallIcon from '@material-ui/icons/Call';

const Emergency = () => {
  const [poop,setPoop] = useState("");
  const [data, setData] = useState([]);

  const [selected2, setSelected2] = React.useState("");


  // const changeSearch = (event) => {
  //     setSelected2(event.target.value);
  //     console.log(selected2);
  // };

  useEffect(() => {
       debugger;
       Axios
           .get("http://localhost/covibd_emergency.php",{
             params: {
               Area: selected2,
             }
           })
           .then(result => setData(result.data));
       console.log(data);
       debugger;
   }, []);

   const handleClick = () => {
        console.log(selected2);
     Axios
         .get("http://localhost/covibd_emergency.php",{
           params: {
             Area: selected2,
           }
         })
         .then(result => setData(result.data));
     console.log(data);
     };



    return (



      <div>


        <div class="heading"><h1>HOSPITALS NEAR YOU</h1></div>

        <div className="searchbar">
     <form className="searchbar" method="GET">


         <input
             value={selected2}
             onInput={e => setSelected2(e.target.value)}
             type="text"
             placeholder="Search "

         />


     </form></div>




      <br></br>
      <div className="search_button"><button className="button4" onClick={handleClick}> Search <SearchIcon/> </button></div>


<div className="cardView2">
{data.map((item, index) => {
    return <div className="cardIndividual2" key={index}>
      <div className="cardContent2">
        <h2>{item.name}</h2>
        <div className="cardRow2">
        <a href={item.emcontact} target="_blank"><button className="button4"> <CallIcon/> </button></a>
        <a href={item.googlemap}  target="_blank"><button className="button4"> <LocationOnIcon/> </button></a>
        </div>
        <div className="cardRow2">
        <div>General Beds | Occupied : {item.GBedOcc}</div>
        <div>/{item.GBedVac}</div>
        </div>
        <div className="cardRow2">
        <div>ICU Beds | Occupied : {item.IcuBedOcc}</div>
        <div>/{item.IcuBedVac}</div>
        </div>
      </div>
    </div>
})}
</div>


      </div>


)
};

export default Emergency;
