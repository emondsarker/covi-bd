import React, {useState, useEffect} from 'react'
import { Card, CardContent, FormControl, MenuItem, Select } from '@material-ui/core'
import './Tracker.css'
import StatBox from './StatBox'
import Map from './Map'
import Graph from './Graph'
import "leaflet/dist/leaflet.css"
import Table from "./Table";
import { sortData,printFormatStat  } from "./util";
import numeral from "numeral";


const Tracker = () => {

    //knowing which country is selected
    const [country, setInputCountry] = useState("BD");
    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);
    const [mapCountries, setMapCountries] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [mapCenter, setMapCenter] = useState({ lat: 23.707310, lng:90.415482  });
    const [mapZoom, setMapZoom] = useState(7);
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries/bangladesh?twoDaysAgo=true&strict=true")
          .then((response) => response.json())
          .then((data) => {
            setCountryInfo(data);
          });
      }, []);
    useEffect(() => {


            // console.log("checking country",countryCode);
            //async, send req then wait
            const getCountriesData = async () =>{
                 fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data)=>{
                        const countries = data.map((country)=>(
                            {
                                name: country.country,
                                value: country.countryInfo.iso2
                            }
                        ));
                        let sortedData = sortData(data);
                        setCountries(countries);
                        //for map
                        setMapCountries(data);
                        //for live case table
                        setTableData(sortedData);
                        // setCountryInfo(data);
                });
            };
    getCountriesData();
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        // console.log('Checkkkk',countryCode);

        //worlwide is from a diff url
        const url = countryCode ==="worldwide" ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setInputCountry(countryCode);
            //all  the data
            setCountryInfo(data);
            if( countryCode ==="worldwide"){
                setMapCenter({lat: 34.80746, lng: -40.4796 });
            setMapZoom(2);
            }
            else{
                setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                setMapZoom(5);

            }

        });

    };

    return (
        <div className="tracker">
            <Card className="tracker_header">
                <CardContent>
            <h1 >&nbsp; 📊 COVID-19 Statistics &nbsp;</h1>
            <FormControl className="tracker_dropdown">
            <label for="countries" style={{ fontSize:'20px', padding: '2px' }}>&nbsp;🌏 Select country&nbsp;</label>
                <Select
                variant="outlined" value={country} onChange={onCountryChange} >
                 <MenuItem value = "worldwide">Worldwide</MenuItem>

                    {/* Display names of all countries using loop will use API to get later*/}
                    {countries.map((country) =>(
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                    ))}


                </Select>

            </FormControl>
            </CardContent>
            </Card>
            <div className="tracker_stats">
                <StatBox onClick={(e) => setCasesType("cases")}
                title="Covid-19 cases"
                isRed
                active={casesType === "cases"}
                cases={printFormatStat(countryInfo.todayCases)}
                total={numeral(countryInfo.cases).format("0.0a")}/>
                <StatBox onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                active={casesType === "recovered"}
                cases={printFormatStat(countryInfo.todayRecovered)}
                total={numeral(countryInfo.recovered).format("0.0a")}/>
                <StatBox onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                isRed
                active={casesType === "deaths"}
                cases={printFormatStat(countryInfo.todayDeaths)}
                total={numeral(countryInfo.deaths).format("0.0a")}
                />

            </div>

            {/* Select your country menu default to worldwide */}
            {/* 3 boxes showing info of cases */}
            {/* Graph showing worlwide cases */}
            {/* Map */}
            <Map
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}/>
            <Card className="graph_table">
                <CardContent >
                    <div className="graph">
                    <h3>Worldwide new {casesType}</h3>
                    <Graph casesType={casesType}/>
                    </div>
                    <div>
                    <h3>Live Cases by Country</h3>
            <Table countries={tableData} /> </div>

                </CardContent>
            </Card>





        </div>
    )
}

export default Tracker
