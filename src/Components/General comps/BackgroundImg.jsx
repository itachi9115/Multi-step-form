import React from "react";

import WebNav from "./WebNav";
function Img(props) {
    return(

<div className={props.imginfo}>
        <WebNav handleNavClick={props.handleNavClick} id={props.id} />
        </div>

    )
}
export default Img
