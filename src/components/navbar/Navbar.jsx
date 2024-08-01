import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {


  return (
    <>
    <nav>
      <div className="container media">
        <h1><span><img className='logo' style={{width: '40px'}} src="./public/imgs/logo.svg" alt="" /> <img style={{width: '62px'}} src="./public/imgs/logo-text.svg" alt="" /></span><img style={{width: '93px'}} src="./public/imgs/logo-text2.svg" alt="" /></h1>
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