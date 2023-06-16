import React from "react";
import Img from "./BackgroundImg";
import PerksCard from "./PerksCard";
import Button from "./Button";
function Perks(props) {
    return(
        
               <div className="Cover">
            <Img imginfo='infoImg' id={props.id} handleNavClick={props.handleNavClick}  />
            <div className="section__container section__width ">
                <h1 className="light--heading__medium margin--bottom__small">Pick adds-ons</h1>
                <p className="light--text__small margin--bottom__large">Adds-ons help enhance your gamimg experience</p>
                <PerksCard priText='Online Services' secText='Access To multiplayer games' price='+1$/mo' />
                <PerksCard priText='Larger Storage' secText='Extra 1TB of storage' price='+2$/mo' />
                <PerksCard priText='Customizable Profile' secText='Custom theme on your profile' price='+2$/mo' />
                <Button id={props.id} name='backward' changeHash={props.changeHash} classNames='btn btn--backward' text='Go Back'/>
            <Button id={props.id} name='forward'  changeHash={props.changeHash} classNames='btn btn--forward' text='Next Step'/>
                </div>
                
                </div> 
                
        
    )
}
export default Perks