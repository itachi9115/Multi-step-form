import React,{useState} from "react";
function Button(props) {
    // const [isNotOnFirstPage,setIsNotOnFirstPage] = useState()
    // // const [isNotOnLastPage,setIsNotOnLastPage] = useState()
    // console.log(props.id);
    // console.log(props.classNames);
    
    return(
        <div >
            <button style={(props.id == 1 && props.classNames === 'btn btn--backward') || (props.id == 5 && props.classNames === 'btn btn--forward') ? {visibility : 'hidden'} : {visibility:'initial'}}  className={props.classNames} onClick={props.changeHash} name={props.name}  >{props.text}  </button>
        </div>
    )
}
export default Button