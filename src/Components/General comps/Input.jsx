import React from "react";
function Input(props) {
    return(
        <div>
            <p className="pLabel margin--bottom__minute">{props.id}</p>
            <input placeholder={props.placeholder} type={props.type} id={props.id} name={props.id} required className="input margin--bottom__medium"/>
        </div>
    )
}
export default Input