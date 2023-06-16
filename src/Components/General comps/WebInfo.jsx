import React from "react";
function WebInfo(props) {

  
    return(
        <div>
              <div className={props.containerStyle}>
                <div className={props.noStyle} data-num={props.num} style={props.num==props.id ? {background : '#bfe2fd'} : {background : 'initial'}}  >{props.no}</div>
                <div className={props.direction}><span className={props.firSpanStyle}>{props.firSpanVal}</span><span className={props.secSpanStyle}>{props.secSpanVal}</span></div>
              </div>
        </div>
    )
    
}
export default WebInfo