import React from 'react'
import './LeftBar.css'
import logo from "../../assets/images.png"
import Navbar from '../Navbar/Navbar'
function LeftBar() {
  return (
    <div className='leftbar'>
        <img src={logo} alt=""  />
        <Navbar/>
    </div>
  )
}

export default LeftBar