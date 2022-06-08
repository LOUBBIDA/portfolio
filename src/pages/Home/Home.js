import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
 
export default function Home() {
  return (
    <>
        <div className="row mt-5">
            <div className="col-md-3">
                <h1>Ayoub <br /> Loubbida <span className="text text-danger">.</span></h1>
                <span className="text text-danger"><hr /></span> 
                <h5>Instagram | linkDin</h5>
                <h5> Dribbble | Behance</h5>

                <button className="btn btn-danger">Contact Me</button>

            </div>
            <div className="col-md-5">
                <img src="images/ayoub.png" alt="" width="100%"/>
            </div>
            <div className="col-md-4">
                <h4 className="text text-danger">Introduction</h4>
                <h1>UI/UX Designer,<br /> FULL STACK DEVLOPPER</h1> <br />
                <p>Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Distinctio eligendi 
                    corrupti mollitia sit maxime accusamus 
                    totam perspiciatis, quo deserunt voluptatum.</p>
                    <a href="#service"> Learn more</a>

            </div>
        </div>

        <div className="section-title text-center" id='service'>
        <h4 className="text text-danger">Service
        </h4>
            <h2>What I Am Great At</h2>
            <p> Duis aute irure dolor in reprehenderit in voluptate <br />
               velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupida non proident <br />
               , sunt in culpa qui officia</p></div>

    </>
  )
}
