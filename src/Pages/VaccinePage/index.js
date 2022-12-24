import React, {useState, useEffect} from 'react';
import SearchArea from '../../SearchArea';
 import './vaccine.css'
 import Axios from 'axios';
 import SearchIcon from '@material-ui/icons/Search';

const Vaccine = () => {

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
           .get("http://localhost/covidbd/covibd_vaccine.php",{
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
         .get("http://localhost/covidbd/covibd_vaccine.php",{
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
        <div className="body">
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
        <div className="search_button"><button className="button4" onClick={handleClick}> Search <SearchIcon/> </button></div>



        <p1>Open: ✅ On Hold: ⏸️ Closed:  ❌</p1>
        <p1>
        <table id="hospital">
    <thead>
    <tr>
            <th colspan="0">Name of center</th>
            <th colspan="0">Vaccine Type</th>
            <th colspan="0">Status</th>
            <th colspan="0">Daily Dose Available</th>
            <th colspan="0">Daily Dose Administered</th>
            <th colspan="0">Special Info </th>
        </tr>

    </thead>
    <tbody>
    {data.map((item, index) => {
        return <tr className="tableCard" key={index}>
            <td className="td">{item.CenterName}</td>
            <td className="td">{item.VaccineType}</td>
            <td className="td">{item.Status}</td>

            <td className="td">{item.DailyDoseAvailable}</td>
            <td className="td">{item.DailyDoseGiven}</td>
            <td className="td">{item.SpecialInfo}</td>
        </tr>
    })}
    </tbody>
</table>

        </p1>


        <div className="cardView">
        {data.map((item, index) => {
            return <div className="cardIndividual" key={index}>
              <div className="cardContent">
                <h2>{item.CenterName} {item.Status}</h2>
                <p>Vaccine: {item.VaccineType}</p>
                <div className="cardRow">
                <div>Daily Doses | Given : {item.DailyDoseGiven}</div>
                <div>/{item.DailyDoseAvailable}</div>
                </div>
                <div className="cardRow">
                <div>Special Info: {item.SpecialInfo}</div>
                </div>
              </div>
            </div>
        })}
        </div>

      </div>
    )
}

export default Vaccine;
