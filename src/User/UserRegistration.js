import React, {useContext,useState} from 'react'
import {MyContext} from './MyContext'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function UserRegister(){
    const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            name:'',
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
          setTimeout(function(){ toggleNav() }, 5000);
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    // function goToLogin(){
    //   setTimeout(function(){ toggleNav() }, 5000);
    // }
    return(

      <div className="center_modal">

        <div className="modal_wrapper">
        <div className="login_wrapper_row">
         <h5>Covi-BD account creation</h5>
         <h5>Register an account here</h5>
            <form onSubmit={submitForm} noValidate>
                <div className="form-group">

                    <input name="name" required type="text" value={state.userInfo.name} onChange={onChangeValue} placeholder="enter name"/>
                </div>
                <div className="form-group">

                    <input name="email" required type="email" value={state.userInfo.email} onChange={onChangeValue} placeholder="enter email"/>
                </div>
                <div className="form-group">

                    <input name="password" required type="password" value={state.userInfo.password} onChange={onChangeValue} placeholder="enter password"/>
                </div>
                  <div className="error">{errorMsg} {successMsg}</div>
                  <div className="homepage_center_btn">

                    <button className="button2" type="submit" value="LOGIN"> SIGN UP </button>

                  </div>
            </form>
    </div>

        </div>
        </div>
    );
}

export default UserRegister
