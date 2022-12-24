import React, {useState, useEffect} from 'react';
import {useContext} from 'react'
import {MyContext} from './MyContext'
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
 import Axios from 'axios';
 import './Admin.css';

const VaccineUpdate = () => {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  const {rootState1,logoutUser} = useContext(MyContext);
  const {isAuth,theUser,showLogin} = rootState1;
  const [note, setNote] = useState({CenterEmail:'',name:'',location:'',contact:'', GBedOcc:'',
                      GBedVac:'',IcuBedOcc:'', IcuBedVac:'',oxygentankavail:'', District:'',});

  const InputEvent = (event) =>{
    const {name, value} = event.target;
    setNote((prevData) =>{
      return {
        ...prevData,
        [name]: value,
      };
    });
    // setNote({CenterEmail: theUser.email})
    console.log(note);
    console.log(note.name);
    console.log(note.CenterEmail);
  };

  const addEvent = () => {
      setNote({
        CenterEmail:'',name:'',location:'',contact:'', GBedOcc:'',
                            GBedVac:'',IcuBedOcc:'', IcuBedVac:'',oxygentankavail:'', District:'',
      });
  };
      useEffect(() => {

           Axios
               .get("http://localhost/covidbd/covibd_hospital_specific.php",{
                 params: {
                   email: theUser.email,
                 }
               })
               .then(result => setData(result.data));
               setNote({CenterEmail: theUser.email})

           console.log(data);
       }, []);

       function sub() {
         Axios

             .get("http://localhost/covidbd/covibd_hospital_update.php",{
               params: {
                 CenterEmail: note.CenterEmail,
                 name: note.name,
                 location: note.location,
                 contact: note.contact,
                 GBedOcc: note.GBedOcc,
                 GBedVac: note.GBedVac,
                 IcuBedOcc: note.IcuBedOcc,
                 IcuBedVac: note.IcuBedVac,
                 oxygentankavail: note.oxygentankavail,
                 District: note.District,
               }
             })
             .then();
             Axios
                 .get("http://localhost/covidbd/covibd_hospital_specific.php",{
                   params: {
                     email: theUser.email,
                   }
                 })
                 .then(result => setData(result.data));
                 setNote({CenterEmail: theUser.email})
         // .post("http://localhost/covidbd/covibd_vaccine_update.php",note);
         editToggle();
       }

       function editToggle(){
         setEdit(!edit);
       }

    return (
        <div className="hospital">

        <div className="update_header" >
        <p>Hospital information </p>
        {edit? <button className="button4" onClick={()=>{addEvent();sub();}}> Update <DoneIcon className="done" /></button>
        :<EditIcon onClick={()=>{editToggle()}}/>}
        </div>

<div className="information_container">
<div className="information_title">
  <p>Name:</p>
  <p>Location:</p>
  <p>Contact:</p>
  <p>General BedOcc:</p>
  <p>General BedVac:</p>
  <p>ICU BedOcc:</p>
  <p>ICU BedVac:</p>
  <p>Oxygen Tank:</p>
  <p>District:</p>
 </div>

         {edit? null :
           <div>

        {data.map((item, index)=>{return <div>
           <div className="information">
            <p>{item.name}</p>
            <p>{item.location}</p>
            <p>{item.contact}</p>
            <p>{item.GBedOcc}</p>
            <p>{item.GBedVac}</p>
            <p>{item.IcuBedOcc}</p>
            <p>{item.IcuBedVac}</p>
            <p>{item.oxygentankavail}</p>
            <p>{item.District}</p>
          </div>
          <div style={{display: "none"}}>
          {note.name = item.name,
          note.location = item.location,
          note.contact = item.contact,
          note.GBedOcc = item.GBedOcc,
          note.GBedVac= item.GBedVac,
          note.IcuBedOcc= item.IcuBedOcc,
          note.IcuBedVac= item.IcuBedVac,
          note.oxygentankavail= item.oxygentankavail,
          note.District= item.District}
          </div>
    </div>  })}
    </div>}



{edit?
    <div className="main_note">
          <form className="note_form" method="post">
         <input type='text'
              className="mainNoteTextArea"
              name='name'
              value={note.name}
              onChange={InputEvent}
              placeholder ="Center Name"
              autoComplete='off'
              defaultValue = {data.name}
              />

              <input type='text'
                className="mainNoteTextArea"
                name='location'
                value={note.location}
                onChange={InputEvent}
                placeholder ="Location"
                autoComplete='off'
                />
                <input type='text'
                  className="mainNoteTextArea"
                  name='contact'
                  value={note.contact}
                  onChange={InputEvent}
                  placeholder ="Contact Info"
                  autoComplete='off'
                  />
                  <input type='text'
                    className="mainNoteTextArea"
                    name='GBedOcc'
                    value={note.GBedOcc}
                    onChange={InputEvent}
                    placeholder ="General Bed Occ"
                    autoComplete='off'
                    />
                    <input type='text'
                      className="mainNoteTextArea"
                      name='GBedVac'
                      value={note.GBedVac}
                      onChange={InputEvent}
                      placeholder ="General Bed Vac"
                      autoComplete='off'
                      />
                      <input type='text'
                        className="mainNoteTextArea"
                        name='IcuBedOcc'
                        value={note.IcuBedOcc}
                        onChange={InputEvent}
                        placeholder ="ICU Bed Occ"
                        autoComplete='off'
                        />
                        <input type='text'
                          className="mainNoteTextArea"
                          name='IcuBedVac'
                          value={note.IcuBedVac}
                          onChange={InputEvent}
                          placeholder ="ICU Bed Vac"
                          autoComplete='off'
                          />
                          <input type='text'
                            className="mainNoteTextArea"
                            name='oxygentankavail'
                            value={note.oxygentankavail}
                            onChange={InputEvent}
                            placeholder ="Oxygen Tank"
                            autoComplete='off'
                            />
                            <input type='text'
                              className="mainNoteTextArea"
                              name='District'
                              value={note.District}
                              onChange={InputEvent}
                              placeholder ="District"
                              autoComplete='off'
                              />


                            <input type='hidden'
                              className="mainNoteTextArea"
                              name='CenterEmail'
                              value={theUser.email}
                              onChange={InputEvent}
                              placeholder ="District"
                              autoComplete='off'
                              />




          </form>

        </div>
        : null}

          </div>

      </div>
    )
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
export default VaccineUpdate;
