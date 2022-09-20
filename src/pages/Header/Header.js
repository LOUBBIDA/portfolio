import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import {BsSkype , BsArrowDown,BsFacebook,BsTwitter} from "react-icons/bs";
import 'animate.css';
import BtnToggle from '../../BtnToggle/BtnToggle';
export default function Header() {
  return (
    <>
        <div className="row mt-5">
            <div className="col-md-2">
                <h3 className='text-white  animate__animated animate__bounceInDown'><img src="images/logo3.png" alt="" className='w-100 logo ' /></h3>
            </div>

            <div className="col-md-10">
                <div className="d-flex justify-content-end">
                                <nav>
                                    <ul className="nav animate__animated animate__bounceInDown">
                                <BtnToggle />
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link ">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/portfolio" className="nav-link">port-folio</Link>
                                        </li>

                                        <li className="nav-item ">
                                        <Link to="/Blog" className="nav-link">Blog  < BsArrowDown/> </Link>
                                        
                                        </li>
                                    
                                        
                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link">Contact </Link>
                                        </li>
                                        
                                    
                                            <li> <a href="icon" className="nav-link"> <BsSkype/></a></li>
                                            <li> <a href="icon" className="nav-link">< BsFacebook/></a></li>
                                            <li> <a href="icon" className="nav-link">< BsTwitter/></a></li>
                                        
                                    </ul>
                                </nav>
                </div>
            </div>
        </div>
    </>
  )
}
