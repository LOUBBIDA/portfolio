import React from 'react';
import './Blog.css';
import 'animate.css';
import {useState} from 'react'

export default function Blog() {
  const [html,setHtml]=useState()
  function htmlf () {
    setHtml(
      !html
    )
  }
  return (
    <>
      <div className="section-title text-center" id=' Blog'>
      <img src="images/bois.png" alt="" className=' w-25  '/>
          <div className='arij'> <h4 className="text text-danger fs-2  ">LATEST NEWS</h4></div> 
                                                                 
                  <h2 className='animate__animated animate__bounceInDown '>My Latest Articles</h2>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit <br /> 
              esse cillum dolore eu
               fugiat nulla pariatur. Excepteur sint occaecat cupida <br/>
               non proident, sunt in culpa qui officia

            </p>
            </div>
            <div className="container">
            
            <div className="row justify-centent-betwen"> 

<div className="col-md-6">
 
 <div className='bloge'>
 
 </div>
  <img src="images/devloper.jpg" alt="" className=' mt-2 w-75 ' />
</div>
<div className="col-md-6 ">
<img src="images/9uzw.gif" alt="" className='w-25 mb-4'/>
<div className='bloge1 ms-5'>
 <div className="container"> 
 {
  html?
   
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ea id placeat itaque repudiandae, ullam, delectus aspernatur porro sunt
     doloremque magnam quaerat recusandae odit necessitatibus quae accusantium nesciunt hic velit?</p>:
     <p className='texo'> <span className='resseau'>Développeur web  </span> <br /> est un informaticien spécialisé dans la programmation ou expressément impliqué dans le développement des applications du World Wide Web,
  ou des applications qui sont exécutées 
  à partir d'un serveur web sur un navigateur web et qui utilisent le protocole HTTP comme vecteur de transmission de l'information.
  .</p>

 }
  
  <button className='btnnoo' onClick={htmlf}>Show more</button>
</div>
        </div>
</div>
  
 </div>
 <div className="row justify-centent-betwen"> 

<div className="col-md-6">
 
 <div className='bloge'>
 
 </div>
  <img src="images/W31.png" alt="" className=' mt-2 w-75 ' />
</div>
<div className="col-md-6 ">
<img src="images/9uzw.gif" alt="" className='w-25 mb-4'/>
<div className='bloge1 ms-5'>
 <div className="container"> 
 <p className='texo'> <span className='resseau'>3W Academy  </span> <br /> est un accélérateur de carrières dans les métiers du développement WEB et Mobile à travers des formations courtes, intensives et 90% pratiques

Au Maroc, 300+ lauréats ont réussi cette formation et 87% décrochent un job ou à lancent leurs propres projets moins de 6 mois après leur certification, </p>
<button className='btnnoo'>Show more</button>
</div>
        </div>
</div>
  
 </div>
 
 <div className="row justify-centent-betwen"> 

               <div className="col-md-6">
                <div className='bloge'>

                </div>
                 <img src="images/Bloge.jpg" alt="" className=' mt-2 w-75 ' />
               </div>
               <div className="col-md-6 ">
               <img src="images/9uzw.gif" alt="" className='w-25 mb-4'/>
               <div className='bloge1 ms-5'>
                <div className="container"> 
              
                <p className='texo'> <span className='resseau'> Réseau Informatique :</span> <br /> est en charge de la bonne marche du système de télécommunication de son entreprise. Qu'il s'agisse d'acheter de nouveaux matériels informatiques, de sécuriser les connexions Internet ou bien de développer 
                le système interne, le technicien réseaux a de multiples fonctions. Travaillant sous 
                les ordres d'un administrateur ou d'un ingénieur réseau, ses missions sont nombreuses 
                 .</p>
                 <button className='btnnoo'>Show more</button>
                  </div>
                  
                       </div>
               </div>
                 
                </div>
                 
                </div> 
                  
               
    </>
)
}