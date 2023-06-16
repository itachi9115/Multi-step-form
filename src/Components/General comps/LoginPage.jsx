import React from "react";
import Img from "./BackgroundImg";
import LoginForm from "./LoginForm";
import Button from "./Button";
function LoginPage(props) {
    return(
        <div className="Cover"
        >
            <Img handleNavClick={props.handleNavClick} imginfo='infoImg' id={props.id} />
         <div className="section__container">
            <h1 className="light--heading__medium margin--bottom__small">Personal Info</h1>
            <p className="light--text__small margin--bottom__large">Please provide your name, email address and phone number </p>
            <LoginForm id={props.id}    />
            <Button id={props.id} name='backward' changeHash={props.changeHash} classNames='btn btn--backward' text='Go Back'/>
            <Button id={props.id} name='forward'  changeHash={props.changeHash} classNames='btn btn--forward' text='Next Step'/>
         </div>
        </div>
    )
}
export default LoginPage