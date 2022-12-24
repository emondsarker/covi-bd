import React, {useState, useEffect} from 'react';
import MyContextProvider from './MyContext.js';
import UserPortal from './UserPortal.js';
import './Admin.css';

const User = () => {

  const [expandH, setExpandH] = useState(true);
  const showH = () =>{setExpandH(true);}
  const dontShowH = () =>{setExpandH(false);}

//Login stuff
const adminUser = {
  email: "emon331@gmail.com",
  password: "admin123"
}
const [user, setUser]=useState({name:"", email:""});
const [error, setError]=useState("");

const Login = details => {
  console.log("details");

  if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
    setUser({
      name: details.name,
      email: details.email,
    })
  } else {
    console.log("Details do not match");
    setError("Details do not match.")
  }
}

const Logout=(details)=> {
  console.log("Logout");
  setUser({
    name: "",
    email: "",
  })
  setError("");
  window.localStorage.removeItem("loginInfo");
}

useEffect(()=>{
  const loginData = window.localStorage.getItem("loginInfo");
  setUser(JSON.parse(loginData));
}, []);

useEffect(()=>{
  window.localStorage.setItem("loginInfo", JSON.stringify(user));
});

  return (
    <div>
      <MyContextProvider>
        <UserPortal/>
      </MyContextProvider>
      </div>

  );
};

export default User;
