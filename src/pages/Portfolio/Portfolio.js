 
import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
  return (
           <>
           <div className="container"> 

           <div className="section-title text-center" id=' portfolio'>
           <img src="images/bois.png" alt="" className='w-25 '/>
               <div className='hassan'> <h4 className="text text-danger fs-2">port-folio</h4></div>
                                                                 
                  <h2> My Masterpiece Collection</h2>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit <br /> 
              esse cillum dolore eu
               fugiat nulla pariatur. Excepteur sint occaecat cupida <br/>
               non proident, sunt in culpa qui officia

            </p>
            </div>
             </div>
             <div className="container">
              <div className="row">

                 <div className="col-md-4">
                 <img src="images/bois.png" alt="" className='w-75 mt-5'/>
              <div className='bois'> 
              <h2  >Fish & ships</h2>
              </div>
              <img src="images/bois.png" alt="" className='w-75 mt-5'/>
              <div className='bois'> 
              <h2  >Fish & ships</h2>
              </div>
              <img src="images/bois.png" alt="" className='w-75 mt-5'/>
              <div className='bois'> 
              <h2  >Fish & ships</h2>
              </div>
              <img src="images/bois.png" alt="" className='w-75 mt-5'/>
              <div className='bois'> 
              <h2  >Fish & ships</h2>
              </div>
              <img src="images/bois.png" alt="" className='w-75 mt-5'/>
              <div className='bois'> 
              <h2  >Fish & ships</h2>
              </div>
              <img src="images/bois.png" alt="" className='w-75 mt-5'/>
              <div className='bois'> 
              <h2  >Fish & ships</h2>
              </div>
                 </div>
                 <div className="col-md-4">
                 <div className="col-md-5 mt-4">
                        <img src="images/ecran.png" alt="" className=' immage' />
                             
                             <video src="images/1.mp4"playsInline
                                      autoPlay
                                           muted
                                              loop
                                            typeof="mp4" className=' vedio'  >
                    
                                              </video>
                                </div>
                 </div>
                 <div className="col-md-4">
                <div className="bottona"> <button className='btnn'>Valider</button></div>
                <div className="bottona"> <button className='btnn'>Valider</button></div>
                <div className="bottona"> <button className='btnn'>Valider</button></div>
                <div className="bottona"> <button className='btnn'>Valider</button></div>
                <div className="bottona"> <button className='btnn'>Valider</button></div>
                <div className="bottona"> <button className='btnn'>Valider</button></div>

                 </div>






                
                </div> 

             </div>
                 
            </>
  )
}