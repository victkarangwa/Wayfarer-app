import React from 'react';
import TextBox from '../components/textBox';
import ButtonBox from '../components/buttonBox';


const Login = props => {

    return (
     
        <div className="login-container">
          <div className="login-form">
            <div className="container-title">
              Login
              <hr></hr>
            </div>
            <TextBox boxName='Username or Email' />
            <TextBox boxName='Password' />
            <ButtonBox />
          </div>
        </div>
    
    );
}
export default Login;


/*
 const textBox = (props) =>{

    console.log(props)


 }

 <Textbox label='email'/>
 */
