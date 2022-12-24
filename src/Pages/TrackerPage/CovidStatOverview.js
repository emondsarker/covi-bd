import React, {useState, useEffect} from 'react';
import {HomeIntro, HomeAbout, StartBtn, StartBtnLink, CovidStatOverview} from '../../Pages/HomePage/HomePageElements.jsx'
import homepageart from '../../Pages/HomePage/Images/Homepage material.svg';
import covidPrevention from '../../Pages/HomePage/Images/covid_prevention.svg';
import covidMyth from '../../Pages/HomePage/Images/covid_myth.svg';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import LinkPreview from '@ashwamegh/react-link-preview';
import '@ashwamegh/react-link-preview/dist/index.css';
import '../../Pages/HomePage/homepage.css';

const CovidStats =()=> {

  const [data, setData] = useState([]);

      useEffect(() => {
           debugger;
           Axios
               .get("http://localhost/covibd_stats.php")
               .then(result => setData(result.data));
           console.log(data);
           debugger;
       }, []);



  return(
    <>
    <div className="CovidStatOverview">
      <Grid container justifyContent="center" alignItems="center" >

            <h1>Covid-19 Statistics :</h1>


        <Grid item xs={12} sm={6} justifyContent="center" alignItems="center">
             <CovidStatOverview class="table" >
                 <thead  >
                     <tr>
                         <th scope="col" class="th1">Cases</th>
                         <th scope="col" class="th2">Recovered</th>
                         <th scope="col" class="th3">Deaths</th>
                     </tr>
                 </thead>

                 <tbody className="tableBody" >
                     {data.map((item, index) => {
                         return <tr className="tableCard" key={index}>
                             <td className="td">{item.total_cases}</td>
                             <td className="td">{item.recovered}</td>
                             <td className="td">{item.passed_away}</td>
                         </tr>
                     })}
                 </tbody>
             </CovidStatOverview>
             </Grid>
            </Grid>
            </div>

    </>
  )
}

export default CovidStats;
