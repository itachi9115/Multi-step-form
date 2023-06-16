
import React ,{useState} from "react";
import LoginPage from "./LoginPage";
import Price from "./Price";
import Perks from "./Perks";
import Suscription from "./Suscription";
import { Route , Routes } from "react-router-dom";


function Card(props) {
    function ChangeUrl(title, url) {  
        if (typeof(history.pushState) != "undefined") {  
            var obj = { Title: title, Url: url };  
            history.pushState(obj, obj.Title, obj.Url);  
        } else {  
            alert("Browser does not support HTML5.");  
        }  
    }  
    // console.log(window.location.hash);
    // console.log(window.location.href);
    const id = {
      login:{Id:'1',name:"/"},
      price:{Id:'2',name:"/Pricing"},
      perks:{Id:'3',name:"/Perks"},
      susCripTion:{Id:'4',name:"/Suscription"}
  
    }
  

let [routerId,setRouterId] = useState(1)
// console.log(window.location)
let pathName = ''
let helper

// function changeId(id) {
//   setRouterId(
   
//     (num)=>{
//         if(num !== 0) num--
//         if (num === 0) num = 4
//         helper = num
//         return num
//     }
//     )
// }
let CurId
const path = window.location.pathname



for(const keys in id) {

 const obj = id[keys]
 
 for (const key in obj){
 if(obj.name === path) {
   CurId = obj.Id

   
 }
   
 }
}
function handleNavClick(e) {
  e.preventDefault()
    const navNum = e.target.dataset.num
//  
    console.log(navNum);
    // e.target.classList.add('marineblue')
    console.log(routerId,CurId);
  
  
   
    
if(navNum === CurId) return


    helper = navNum
    hasdDec(navNum)

   const isOnPage = (navNum === helper);

 
   
    window.location.pathname = pathName
  
  
    
}

function hasdDec(dec) {
   
    
  if(dec == 1) pathName = '/'
  if(dec == 2) pathName = '/Pricing'
  if(dec == 3) pathName = '/Perks'
  if(dec == 4) pathName = '/Suscription'

  
}

function changeHash(e) {
  for(const keys in id) {

    const obj = id[keys]
    
    for (const key in obj){
    if(obj.name === path) {
      CurId = obj.Id
      console.log(CurId);
      
    }
      
    }
   }
    e.preventDefault()

 
 

const ele = e.target.name
// console.log(e.target);

console.log(ele);

  if (ele === 'forward') {

    
CurId++
  }
  if (ele === 'backward') {
    CurId--
  }

    hasdDec(CurId)
    console.log(helper);
    
    // console.log(pathName);
    // console.log(routerId,helper,pathName);
    
    

  
   window.location.pathname = pathName
  
  
}


   return(
    <div className="cardCover">
        <>
       <Routes>
         <Route path="/" element={ <LoginPage id={id.login.Id} changeHash={changeHash} handleNavClick={handleNavClick} />} />
         <Route path="/Pricing" element={<Price id={id.price.Id} changeHash={changeHash} handleNavClick={handleNavClick} />} />
         <Route path="/Perks" element={<Perks id={id.perks.Id} changeHash={changeHash}  handleNavClick={handleNavClick}  />} />
         <Route path="/Suscription" element={<Suscription id={id.susCripTion.Id} changeHash={changeHash}  handleNavClick={handleNavClick}    />} />
       </Routes>
    </>
      

    </div>
   ) 
}
export default Card
