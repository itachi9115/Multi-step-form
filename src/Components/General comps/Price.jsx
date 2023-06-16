import React,{useState} from "react";
import Img from "./BackgroundImg";
import PriceCard from "./PriceCard";
import { ArcadeIcon } from '../../../assets/images/ImageExporter'
import { AdvancedIcon } from '../../../assets/images/ImageExporter'
import { ProIcon } from '../../../assets/images/ImageExporter'
import Button from "./Button";

function Price(props) {
   const [onYear,setOnYear] = useState(true)
function handleTimeChange(e) {
    if(e.target.classList.contains('monthly')) 
    setOnYear(true)
    if(e.target.classList.contains('yearly')) 
    setOnYear(false)
}
// console.log(props.handleNavClick);

    return(
        <div className="Cover">
            <Img imginfo='infoImg' id={props.id} handleNavClick={props.handleNavClick} />
            <div className="section__container section__width ">
                <h1 className="light--heading__medium margin--bottom__small">Select your plan</h1>
                <p className="light--text__small margin--bottom__large">You have the option of monthly or yearly billing</p>
            
            <div className="flex flex--3 margin--bottom__medium " style={onYear ? {display:'flex'} : {display:"none"}} >
            <PriceCard imgSrc={ArcadeIcon} text='Arcade' pricing='$9/mo' />
                <PriceCard imgSrc={AdvancedIcon} text='Advanced' pricing='$12/mo'  />
                <PriceCard imgSrc={ProIcon} text='Pro' pricing='$15/mo'   />
            </div>
            <div className="flex flex--3 margin--bottom__medium " style={!onYear ? {display:'flex'} : {display:"none"}}>
            <PriceCard imgSrc={ArcadeIcon} text='Arcade' pricing='$90/yr' time='2 months free' />
                <PriceCard imgSrc={AdvancedIcon} text='Advanced' pricing='$120/yr'  time='2 months free'  />
                <PriceCard imgSrc={ProIcon} text='Pro' pricing='$150/yr'  time='2 months free'  />
            </div>
            <div className="timeChanger--container margin--bottom__extralarge ">
                <div className="timeChanger flex flex--verticalcenter">
                    <p className="light--text__minute">Monthly</p>
                    <div className="switcher flex flex--verticalcenter " style={{justifyContent:'space-around'}}>
                        <div className="white--circle monthly" onClick={handleTimeChange} style={onYear ? {background : 'white'} : {background : '#02295a'}}></div>
                        <div className="white--circle yearly" onClick={handleTimeChange}  style={onYear ? {background : '#02295a'} : {background : 'white'}}></div>
                    </div>
                    <p className="light--text__minute">Yearly</p>
                </div>
            </div>
            <Button id={props.id} name='backward' changeHash={props.changeHash} classNames='btn btn--backward' text='Go Back'/>
            <Button id={props.id} name='forward'  changeHash={props.changeHash} classNames='btn btn--forward' text='Next Step'/>
            </div>
            
        </div>
    )
}
export default Price