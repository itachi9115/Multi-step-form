import React from 'react'

function PriceCard(props) {
    return(
        <div className='pricing--card'>
        <img src={props.imgSrc} alt={props.alt} style={{width:'3.5rem'}} className='margin--bottom__large'/>

        <p className='light--text__small margin--bottom__extraminute' style={{color:'#02295a',fontWeight:'600',lineHeight:'1.8rem'}}>{props.text}</p>
        <p className='light--text__small  margin--bottom__extraminute'>{props.pricing}</p>
        <p className='light--text__minute' style={{color:'#02295a',fontWeight:'500'}}>{props.time}</p>
        </div>
    )
}
export default PriceCard