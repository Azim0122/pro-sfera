import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {


  return (
    <>
    <nav>
      <div className="container media">
        <h1><img className='logo'  src="./public/imgs/logo.svg" alt="" /> </h1>
        <div className="buttons">
          <button className='btn1'>Вход по ID</button>
         <div className="btns">
         <button className='btn2 btn-settings'><i class="fa-solid fa-gear"></i></button>
         <button className='btn2'><i class="fa-solid fa-bars"></i></button>
         </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar