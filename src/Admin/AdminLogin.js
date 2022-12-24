import React, {useContext, useState} from 'react'
import {MyContext} from './MyContext'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import logo from '../NavBar/Logo/Logo.svg';

function AdminLogin(){

    const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }


    return(
      <div className="center">
        <div className="login_wrapper">
            <div className="login_wrapper_row">
              <img src={logo} className="login_logo"/>
              <h3>Covi-BD</h3>
              <h3>Admin Portal</h3>
            </div>
            <div className="error">{errorMsg} {successMsg}</div>
            <form  onSubmit={submitForm} noValidate>
                <div className="form-group">
                    <input name="email" type="email" placeholder="email" value={state.userInfo.email} onChange={onChangeValue} />
                </div>
                <div className="form-group">
                    <input name="password" type="password" placeholder="password" value={state.userInfo.password} onChange={onChangeValue} />
                </div>

                <div className="registration_deets">
                  <p>Don't have an account?</p>
                  <a href="mailto:covi.bd@gmail.com?subject=Registration for Hospital&body=Please send us details about your hospital so we can register you." target="_blank">Register your Hospital</a>
                </div>
                <div className="homepage_center_btn">
                  <button className="button2" type="submit" value="LOGIN" > LOG IN </button>
                </div>

            </form>
        </div>
      </div>
    );
}
//
// <button className="logout2" >
//   <ArrowBackIcon onClick={toggleNav}/>
//   <span class="tooltip">REGISTER</span>
//  </button>
export default AdminLogin;
