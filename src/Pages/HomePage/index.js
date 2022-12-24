import React, {useState, useEffect} from 'react';
import {HomeIntro, HomeAbout, StartBtn, StartBtnLink} from './HomePageElements';
import {NavLinks2, NavLogo} from '../../NavBar/NavBarElements.jsx';
import cover from './Images/Homepage material.svg';
import covidPrevention from './Images/covid_prevention.svg';
import covidMyth from './Images/covid_myth.svg';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import LinkPreview from '@ashwamegh/react-link-preview';
import '@ashwamegh/react-link-preview/dist/index.css';
import './homepage.css';
import logo from '../../NavBar/Logo/Logo.svg';
// import StatBox from '../TrackerPage/StatBox'
// import CovidStats from '../../Pages/TrackerPage/CovidStatOverview.js';
import MediaCard from './News';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Home =()=> {

  const [countryInfo, setCountryInfo] = useState({});

       useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries/bangladesh?twoDaysAgo=true&strict=true")
          .then((response) => response.json())
          .then((data) => {
            setCountryInfo(data);
          });
          console.log(countryInfo);
      }, []);

  return(
    <>
    <div className="body">
      <Grid container justifyContent="center"  className="grid1" spacing={2}>
      <Grid  item xs={9} alignItems="center" className="column">
      <div className="ViewMore">
        <p>Current Covid-19 Statistics |</p>
          <div className="h_button">
            <NavLinks2 to="/tracker"><InsertChartIcon/>View more </NavLinks2>
          </div>
        </div>
        <div className="tracker_stats">

            </div>

        <div className="ViewMore">
          <p>Look up information provided by</p>
          <NavLogo to="/home"><img src={logo}/> <p>Covi-BD</p> </NavLogo>
          </div>
          Information has been provided by authorized individuals
          <div className="ViewMore">
            <div className="h_provided" onClick={()=>{window.location ="/hospital"}}>
              <LocalHospitalIcon fontSize="large" />
                <div>
                  <h3>Hospitals</h3>
                  <p>View hospital information about: </p>
                  <p>Avaialable/Occupied General/ICU </p>
                  <p>Beds, Location, Contact </p>
                </div>
            </div>
            <div>
            <div className="h_provided" onClick={()=>{window.location ="/vaccine"}}>
              <FavoriteIcon fontSize="large" />
              <div>
                <h3> Vaccine</h3>
                <p>View hospital information about: </p>
                <p>Avaialable/Occupied General/ICU </p>
                <p>Beds, Location, Contact </p>
              </div>
            </div>
    </div>
            </div>
            <div className="ViewMore">
            <LibraryBooksIcon fontSize="large"/>
              <br/>
              <h3>Covid-19 Related News </h3>

              </div>
              News regarding Covid-19 and vaccination in Bangladesh

              <br/><br/>
          <MediaCard/>

          </Grid>
          <Grid  item xs={3} className="column" >
          <img src={covidPrevention} placeholder="covidPrevention"></img>
          <img src={covidMyth} placeholder="covidPrevention"></img>
          </Grid>
</Grid>


      <HomeAbout>
        <h3></h3>
      </HomeAbout>
      </div>
    </>
  )
}

export default Home;
// <StatBox title="Covid-19 cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
// <StatBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
// <StatBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
