// import {useEffect, useState} from 'react'
import {BsArrowDownCircleFill  } from "react-icons/bs";
import CountUp from 'react-countup';

import './Home.css'
 
 
 
export default function Home()   {
 

  
// const [number,setNumbr] =useState(0);



// useEffect(()=>{
//   setInterval(()=>{ 
//     setNumbr(
//       number +1
//     )
//   },1000)
// },[number])


  return  (
    <>
        <div className="row mt-5">
            <div className="col-md-3">
                <h1>Ayoub <br /> Loubbida <span className="text text-danger">.</span></h1>
                <span className="text text-danger"><hr/></span> 
                <h5>Instagram | linkDin</h5> 
                <h5> Dribbble | Behance</h5>

                <button className="btn btn-danger">Contact Me</button>

            </div>
            <div className="col-md-5">
                <img src="images/ayoub.png" alt="" className='imgg' width="100%"/>
            </div>
            <div className=" col-md-4">
               
              <img src="images/bois.png" alt="" className='w-75 '/>
              <div className="bios1">
              <h4 className="text text-danger fs-2">Introduction</h4>
              </div>
                 
                <h1>UI/UX Designer,<br /> FULL STACK DEVLOPPER</h1> <br />
                <p>Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Distinctio eligendi 
                    corrupti mollitia sit maxime accusamus 
                    totam perspiciatis, quo deserunt voluptatum.</p>
                    <a href="#service" className='service-link'> Learn more  </a>
                    <a href="icon" className="nav-link"><BsArrowDownCircleFill/></a>
                    {/* <div className='d-flex mt-5'>
                       <BsArrowRight/><h5 className=' mb-4'>1</h5><BsArrowLeft/> 
                    </div> */}

            </div>
        </div>


        <div className="section-title text-center" id='service'>
        <img src="images/bois.png" alt="" className='w-25 my-2'/>
              <div className="arij">  <h4 className="text text-danger fs-2"> Service</h4></div>
                                                                 
                  <h2>What I Am Great At</h2>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit <br /> 
              esse cillum dolore eu
               fugiat nulla pariatur. Excepteur sint occaecat cupida <br/>
               non proident, sunt in culpa qui officia

            </p>
            </div>
      <div className="container  ">
        <div className="row mt-5"> 
          <div className="col-md-3"> 
            <div className="section-ptb bgs">
              <img src="images/port1.png" alt="" className='image'/>
              <div  className="skill-project text-center ">
            <h4  className="mb-3">UI/UX Design</h4>
            <p>129 projects</p>
            </div>
            </div>
          </div>
          <div className="col-md-3  "> 
          <div className="section-ptb bgs">
          <img src="images/port.png"   alt=""  className='image'/>
          <div  className="skill-project text-center ">
            <h4  className="mb-3">Web Development</h4>
            <p>221 projects</p>
            </div>
           </div>
          </div>
          <div className="col-md-3  "> 
          <div className="section-ptb bgs">
          <img src="images/code.png" alt="" className='image' />
          <div  className="skill-project text-center">
            <h4  className="mb-3 ">Web Research</h4>
            <p>450 project</p>
            </div>
          </div>
          </div>
          <div className="col-md-3  ">
          <div className="section-ptb bgs">
             <img src="images/wifi.png" alt="" className='image'/>
             <div  className="skill-project text-center">
            <h4  className="mb-3">Marketing</h4>
            <p> 331 projects</p>
            </div>
              </div>
             </div>
        </div>
      </div>  
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center pt-5">
          <span className="text text-center text-danger  " ><span className='titre'> </span>  <CountUp start={0} end={100} delay={0}/>  + </span>
          <p className='fs-5'>Years of Experience</p>
          </div>
          <div className="col-md-3 text-center pt-5">
             <span className="text text-center text-danger  " > <span className='titre'>200  +</span>   </span>
          <p className='fs-5'>Satisfied Customers</p>
          </div>
          <div className="col-md-3 text-center pt-5">
          <span className="text text-center text-danger  " ><span className='titre'>769  +</span>     </span>
          <p className='fs-5'> Design Items</p>
          </div>
          <div className="col-md-3 text-center pt-5text-center pt-5">
          <span className="text text-center text-danger  " ><span className='titre' >93  +</span>      </span>
          <p className='fs-5'>Clients Served</p>
          </div>
        </div>
        </div>           
              
    </>
  )
}
