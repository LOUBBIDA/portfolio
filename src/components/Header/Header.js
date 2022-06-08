import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import {  } from "react-icons/bs";;
export default function Header() {
  return (
    <>
        <div className="row mt-5">
            <div className="col-md-2">
                <h3 className='text-white'><img src="images/ayo.png" alt="" /></h3>
            </div>

            <div className="col-md-10">
                <div className="d-flex justify-content-end">
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/" className="nav-link">Projects</Link>
                            </li>

                            <li className="nav-item">
                            <Link to="/" className="nav-link">Blog</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <div className="row">
                            <ul>
                                <li> <a href="icons"></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
  )
}
