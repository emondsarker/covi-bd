import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Axios from 'axios'

const SearchArea = () => {

    const [poop,setPoop] = useState("");
    const [data, setData] = useState([]);
    const [selected, setSelected] = React.useState("");
    const [selected2, setSelected2] = React.useState("");

    const changeDivison = (event) => {
        setSelected(event.target.value);
    };
    const changeDistrict = (event) => {
        setSelected2(event.target.value);
        console.log(selected2);
    };

    useEffect(() => {
         debugger;
         Axios
             .get("http://localhost/covidbd/covibd_hospital.php",{
               params: {
                 district: selected2,
               }
             })
             .then(result => setData(result.data));
         console.log(data);
         debugger;
     }, []);

     const handleClick = () => {
       Axios
           .get("http://localhost/covidbd/covibd_hospital.php",{
             params: {
               district: selected2,
             }
           })
           .then(result => setData(result.data));
       console.log(data);
       };

    const barishal = [

        "Barguna",
        "Barishal",
        "Bhola",
        "Jhalokathi",
        "Patuakhali",
        "Pirojpur",

    ]
    const chattogram = [
        "Brahmanbaria",
        "Chandpur", "Chattogram",
        "Comilla",
        "Cox",
        "Feni",
        "Khagrachhari",
        "Laksmipur",
        "Noakhali",
        "Rangamati",
    ];
    const dhaka = [
        "Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj",
        "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"
    ];

    const khulna = [
        "Bagerhat","Chuadanga", "Jashor" ,"Jhenaidah" ,"Khulna", "Kushtia" ,"Magura", "Meherpur", "Narail" ,"Satkhira"
    ];
    const mymensingh = [
 "Jamalpur","Mymensingh", "Netrokona", "Sherpur"
    ]
    const rajshahi = [
        "Bogura","Chapai Nawabganj" ,"Joypurhat" ,"Naogaon" ,"Natore" ,"Pabna" ,"Rajshahi" ,"Sirajganj"
    ];
    const rangpur = [
        "Dinajpur" ,"Gaibandha" ,"Kurigram" ,"Lalmonirhat" ,"Nilphamari" ,"Panchaghar" ,"Rangpur","Thakurgaon"
    ];
    const sylhet = [
        "Habiganj","Maulavi Bazar","Sunamganj" ,"Sylhet"
    ];
    let division = null;
    let options = null;
    if (selected === "Barishal Division") {
        division = barishal;
    } else if (selected === "Chattogram Division") {
        division = chattogram;
    }
    else if (selected === "Dhaka Division") {
        division = dhaka;
    }
    else if (selected === "Khulna Division") {
        division = khulna;
    }
    else if (selected === "Mymensingh Division") {
        division = mymensingh;
    }
    else if (selected === "Rajshahi Division") {
        division = rajshahi;
    }
    else if (selected === "Rangpur Division") {
        division = rangpur;
    }
    else if (selected === "Sylhet Division") {
        division = sylhet;
    }



    if (division) {
        options = division.map((el) => <option key={el}>{el}</option>);
    }
      console.log(selected2);
      console.log(data);
      return (
        <div>
        {selected2}
        <form className="selectionArea">
            {/* </form><form action="" method="post"> */}
            <h2> Division:  </h2>
            <select onChange={changeDivison}>
                <option value="">Select</option>
                <option value="Barishal Division">Barisal Division</option>
                <option value="Chattogram Division">Chattogram Division</option>
                <option value="Dhaka Division">Dhaka Division</option>
                <option value="Khulna Division">Khulna Division</option>
                <option value="Mymensingh Division">Mymensingh Division</option>
                <option value="Rajshahi Division">Rajshahi Division</option>
                <option value="Rangpur Division">Rangpur Division</option>
                <option value="Sylhet Division">Sylhet Division</option>
            </select>
            <h2> District:  </h2>
            <select name="district_filter" id="district_filter" class="custom_input" onChange={changeDistrict}>
            <option value="" >Select</option>
                {
                    options
                }

            </select>

        </form>
        <br></br>
        <button className="button2" onClick={handleClick}> Search </button>

        <table id="hospital">
<thead>
<tr>
      <th colspan="0">Name of Hospital</th>
      <th colspan="0">Location</th>
      <th colspan="0">Contact</th>
      <th colspan="2">General Bed</th>
      <th colspan="2">ICU Bed</th>
  </tr>
  <tr>
      <td></td>
      <td></td>
      <td></td>
      <th>Occupied</th>
      <th>Vacant</th>
      <th>Occupied</th>
      <th>Vacant</th>
    </tr>
</thead>
<tbody className="tableBody" >
  {data.map((item, index) => {
      return <tr className="tableCard" key={index}>
          <td className="td">{item.name}</td>
          <td className="td">{item.location}</td>
          <td className="td">{item.contact}</td>
          <td className="td">{item.GBedOcc}</td>
          <td className="td">{item.GBedVac}</td>
          <td className="td">{item.IcuBedOcc}</td>
            <td className="td">{item.IcuBedVac}</td>
      </tr>
  })}
</tbody>

</table>


        </div>

    )
}

export default SearchArea
