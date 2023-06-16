import React from "react";
import Img from "./BackgroundImg";
import Button from "./Button";
import { Link } from "react-router-dom";
function Suscription(props) {
    return(
        <div>
        <div className="Cover">
      <Img imginfo='infoImg' id={props.id} handleNavClick={props.handleNavClick} />
      <div className="section__container section__width ">
          <h1 className="light--heading__medium margin--bottom__small">Finishing up</h1>
          <p className="light--text__small margin--bottom__large">Double check everything looks okay before confirming</p>
<div className="gray padding--small margin--bottom__extralarge small-radius">
<div className="flex flex--space__between light--text__minute border--bottom__minute gray--border__bottom margin--bottom__small padding--bottom__large">
<div>
<p className="light--heading__small">Arcade <span >(Monthly)</span></p>
<Link >change</Link>
</div>
  <p>$cost</p>
</div>
<div className="flex flex--space__between light--text__minute margin--bottom__small ">
<div>
<p>Online Services </p>

</div>
  <p>$cost</p>
</div>
<div className="flex flex--space__between light--text__minute ">
<div>
<p>Larger Storage</p>

</div>
  <p>$cost</p>
</div>
</div>
<div className="flex flex--space__between margin--bottom__extraextralarge">
  <p>Total <span>(per month)</span></p>
  <p>$cost</p>
</div>
          <Button id={props.id} name='backward' changeHash={props.changeHash} classNames='btn btn--backward' text='Go Back'/>
            <Button id={props.id} name='forward'  changeHash={props.changeHash} classNames='btn btn--forward' text='Confirm'/>
          </div>
          </div>
  </div>
    )
}
export default Suscription