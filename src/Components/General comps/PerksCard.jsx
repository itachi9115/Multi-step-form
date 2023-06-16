import{useState} from 'react'
import { CheckMark } from "../../../assets/images/ImageExporter"
function PerksCard(props) {
    const [isClicked,setIsClicked] = useState(false)
    function handleClick() {
        setIsClicked(!isClicked)
        console.log(isClicked);
        
    }
    return(
        <div className="perkscard--container margin--bottom__small flex flex--verticalcenter" style={isClicked ? {borderColor:'#02295a'} :{}}>
            <div className="checkmark--container" style={isClicked ? {background :'#02295a'} : {}} >
         <img src={CheckMark} alt="icon" onClick={handleClick}  />
      
            </div>
            <div >
            <p className="light--text__small margin--bottom__extraminute" style={{color:'#02295a',fontWeight:'600'}}>{props.priText} </p>
            <p className="light--text__minute">{props.secText}</p>
         </div>
         <p className="light--text__minute"  style={{color:'#02295a',position:'absolute',left:'85%',fontWeight:'600'}}>{props.price}</p>
        </div>
    )
}
export default PerksCard