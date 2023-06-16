import React,{useState} from "react";
import Input from "./Input";
import Button from "./Button";
import preventDefault from "./helper";
import {AiFillEye , AiFillEyeInvisible} from 'react-icons/ai'
// import { auth } from '.firebase';

// const LoginForm = ()



function LoginForm(props) {
  let [isOnView,setIsOnView] = useState(false)
  // console.log(isOnView);
  
  function handlePasswordView(e) {
   
    
setIsOnView(!isOnView)


  }
  function handleSubmit(props) {
    
  }
    return(
        <div>
       <form action="" onSubmit={handleSubmit}>
       <Input  type='text' id='Name' placeholder="Adeyemi Bukunmi" /> 
           <Input type='email' id='Email' placeholder="Badeyemi@gmail.com"  /> 
         <div className="password--container">
         <Input type={isOnView ? 'text' : 'password'} id='Password'  /> 
         <div onClick={handlePasswordView}>
         <AiFillEye className="password--icons" size={20} style={isOnView ? {display:'initial'} : {display: 'none'}} />
            <AiFillEyeInvisible className="password--icons" size={20} style={isOnView ? {display:'none'} : {display: 'initial'}} />
         </div>
         </div>
       </form>
         
    
        </div>
    )
}
export default LoginForm