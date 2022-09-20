import React from 'react'
import './Footer.css'
import {BsBriefcaseFill,BsFillTelephoneFill,BsLinkedin ,BsTwitter, BsFacebook,BsChatQuoteFill } from "react-icons/bs";

export default function Footer() {
  return (
    <>
   
       
      


<div className='container'>
  
  <div className='khadij '>
    <div className="container"> 
    <div className="row justify-content-betwen"> 
<div className="col-md-4">
        <img src="images/logo3.png" alt="" className='w-25 ' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
             Architecto reiciendis nulla aut <br />
                 doloremque ea sit commodi molestiae hic officiis. Temporibus.</p>
</div>
<div className="col-md-2">
<div  className='  loubbida' > 
  <div className='pe-2'><BsLinkedin/></div> 
  <div className='pe-2'>  <BsTwitter/></div>
     <div className='pe-2'> <BsBriefcaseFill/> </div>
   <div className='pe-2'> < BsFacebook/></div>
   <div className='pe-2'> <BsChatQuoteFill/></div>
  </div>
</div>
<div className="col-md-6 fs">
     <div className="row mt-5 me-5 ">
         <div className="col-md-2">
         <span className='text-danger'><h4>Service</h4></span>
             <ul>
                 <li>  Consuiting </li>
                <li>Devlopment</li>
                 <li>Designer</li>
                 <li>Réseaux</li>
             </ul>
    </div>
    <div className="col-md-2">
    <span className='text-danger'><h4>Indistruis</h4></span>
      <ul>
        <li> Finance</li>
        <li>Public Sector</li>
        <li>Retail</li>
      </ul>
      
    </div>
     <div className="col-md-2">
     <span className='text-danger'><h4>Company </h4></span>
      <ul>
        <li>About me</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>

  </div>
  
  
</div>
 

<span className="text text-danger"><hr/></span> 
<p className="pt-20 text-center"><i className="fas fa-copyright mr-10"></i>Copyright- AyouB-Loubbida | All Rights Reserved</p>


</div>
</div>
  </div>
  
   </div>


      
 


    
    </>
    
    
    )}