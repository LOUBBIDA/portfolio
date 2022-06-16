import React , {useContext, useState} from 'react'
import './BtnToggle.css'
import {ThemeContext} from '../Context/ThemeContext'
import { BsMoon,BsCloudSunFill} from 'react-icons/bs'

function BtnToggle() {

    const{toggleTheme,theme} = useContext(ThemeContext)

  return (
    <div onClick={toggleTheme} className={theme ? "btn-toggle goLight" : "btn-toggle goDark"}>
        {
            theme ? <BsMoon/> : <BsCloudSunFill/>
        }
    </div>
  )
}

export default BtnToggle