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
  const [note, setNote] = useState({CenterEmail:'',CenterName:'',VaccineType:'',SpecialInfo:'', Status:'',
                      DailyDoseAvailable:'',DailyDoseGiven:'', District:'',});

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
    console.log(note.CenterName);
    console.log(note.CenterEmail);
  };

  const addEvent = () => {
      setNote({
        CenterName:'',VaccineType:'',SpecialInfo:'', Status:'',
                            DailyDoseAvailable:'',DailyDoseGiven:'',CenterEmail:'', District:'',
      });
  };
      useEffect(() => {

           Axios
               .get("http://localhost/covidbd/covibd_vaccine_specific.php",{
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

             .get("http://localhost/covidbd/covibd_vaccine_update.php",{
               params: {
                 CenterEmail: note.CenterEmail,
                 CenterName: note.CenterName,
                 VaccineType: note.VaccineType,
                 SpecialInfo: note.SpecialInfo,
                 Status: note.Status,
                 DailyDoseAvailable: note.DailyDoseAvailable,
                 DailyDoseGiven: note.DailyDoseGiven,
                 District: note.District,
               }
             })
             .then();

            setTimeout(function(){ Axios
                .get("http://localhost/covidbd/covibd_vaccine_specific.php",{
                  params: {
                    email: theUser.email,
                  }
                })
                .then(result => setData(result.data));
                setNote({CenterEmail: theUser.email})}, 500);
             // Axios
             //     .get("http://localhost/covidbd/covibd_vaccine_specific.php",{
             //       params: {
             //         email: theUser.email,
             //       }
             //     })
             //     .then(result => setData(result.data));
             //     setNote({CenterEmail: theUser.email})
         // .post("http://localhost/covidbd/covibd_vaccine_update.php",note);
         editToggle();
       }

       function editToggle(){
         setEdit(!edit);
       }

    return (
        <div className="hospital">

        <div className="update_header" >
        <p>Vaccine information </p>
        {edit? <button className="button4" onClick={()=>{addEvent();sub();}}> Update <DoneIcon className="done" /></button>
        :<EditIcon onClick={()=>{editToggle()}}/>}
        </div>

<div className="information_container">
<div className="information_title">
  <p>Center Name:</p>
  <p>District:</p>
  <p>Vaccine Type:</p>
  <p>Special Info:</p>
  <p>Status:</p>
  <p>Available Dose:</p>
  <p>Dose Administered:</p>
 </div>

         {edit? null :
           <div>

        {data.map((item, index)=>{return <div>
           <div className="information">
            <p>{item.CenterName}</p>
            <p>{item.District}</p>
            <p>{item.VaccineType}</p>
            <p>{item.SpecialInfo}</p>
            <p>{item.Status}</p>
             <p>{item.DailyDoseAvailable}</p>
              <p>{item.DailyDoseGiven}</p>
          </div>
          <div style={{display: "none"}}>
          {note.CenterName = item.CenterName,
          note.VaccineType = item.VaccineType,
          note.SpecialInfo = item.SpecialInfo,
          note.Status = item.Status,
          note.DailyDoseAvailable= item.DailyDoseAvailable,
          note.DailyDoseGiven= item.DailyDoseGiven,
          note.District= item.District}
          </div>
    </div>  })}
    </div>}



{edit?
    <div className="main_note">
          <form className="note_form" method="post">
         <input type='text'
              className="mainNoteTextArea"
              name='CenterName'
              value={note.CenterName}
              onChange={InputEvent}
              placeholder ="Center Name"
              autoComplete='off'
              defaultValue = {data.CenterName}
              />
              <input type='text'
                className="mainNoteTextArea"
                name='District'
                value={note.District}
                onChange={InputEvent}
                placeholder ="District"
                autoComplete='off'
                />
              <input type='text'
                className="mainNoteTextArea"
                name='VaccineType'
                value={note.VaccineType}
                onChange={InputEvent}
                placeholder ="Vaccine Type"
                autoComplete='off'
                />
                <input type='text'
                  className="mainNoteTextArea"
                  name='SpecialInfo'
                  value={note.SpecialInfo}
                  onChange={InputEvent}
                  placeholder ="Special Info"
                  autoComplete='off'
                  />
                  <input type='text'
                    className="mainNoteTextArea"
                    name='Status'
                    value={note.Status}
                    onChange={InputEvent}
                    placeholder ="Status"
                    autoComplete='off'
                    />
                    <input type='text'
                      className="mainNoteTextArea"
                      name='DailyDoseAvailable'
                      value={note.DailyDoseAvailable}
                      onChange={InputEvent}
                      placeholder ="Doses Avialable"
                      autoComplete='off'
                      />
                      <input type='text'
                        className="mainNoteTextArea"
                        name='DailyDoseGiven'
                        value={note.DailyDoseGiven}
                        onChange={InputEvent}
                        placeholder ="Doses Given"
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
