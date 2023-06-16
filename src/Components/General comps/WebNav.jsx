import React from 'react'
import WebInfo from './WebInfo'
function WebNav(props) {
// console.log(props.handleNavClick);

    return(
        <div onClick={props.handleNavClick} >
          <WebInfo containerStyle='flex-1--2' noStyle='num--circle' no='1' direction='flex flex--column' firSpanStyle='light--text__minute' secSpanStyle='medium--light__text' firSpanVal='step 1' secSpanVal='your info' num={1} id={props.id} />
          <WebInfo containerStyle='flex-1--2' noStyle='num--circle' no='2' direction='flex flex--column'  firSpanStyle='light--text__minute' secSpanStyle='medium--light__text' firSpanVal='step 2' secSpanVal='select plan' num={2} id={props.id} />
          <WebInfo containerStyle='flex-1--2' noStyle='num--circle' no='3' direction='flex flex--column' firSpanStyle='light--text__minute' secSpanStyle='medium--light__text' firSpanVal='step 3' secSpanVal='adds on' num={3} id={props.id} />
          <WebInfo containerStyle='flex-1--2' noStyle='num--circle' no='4' direction='flex flex--column' firSpanStyle='light--text__minute' secSpanStyle='medium--light__text' firSpanVal='step 4' secSpanVal='summary' num={4} id={props.id} />
          
        </div>
    )
    
}
export default WebNav