import React, { useState } from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import ProServices from '../../components/proServices/ProServices'
import { Link, NavLink } from 'react-router-dom'
function Home() {
  const [category, setCategory]=useState("Сервисы")
  return (
    <>
    <nav>
      <Navbar />
    </nav>
       <main>
        <section className='section_1'>
          <div className="container">
          <h1><img className='logo'  src="./public/imgs/logo.svg" alt="" /> </h1>
          <div className="search">
          <div className="search-input">
                          <form action="">
                          <input type="input" name="focus" required class="search-box" placeholder="Введите ваш запрос" />
                                <button class="close-icon" type="reset"></button>
                                <button className='button-srch'><Link to={'/search'}><i class='bx bx-globe'></i></Link></button>
                          </form>
                            </div>
           <div className="search-info">
            <div className="weather">
            <i class='bx bx-sun'></i> 
            <i class='bx bx-cloud'></i>
            <span>+25°</span>
            </div>
            <div className="courses">
            <i class='bx bx-dollar' ></i> 
            <i class='bx bx-ruble' ></i>  
            <span>12 150.20</span>
            </div>
           </div>
          </div>
          </div>
        </section>

        <section>
          <div className="container4">
          <div className="links">
              <ul>
                <li style={category=="Сервисы" ? {color: "rgba(95, 224, 216, 1)"}:{}} onClick={()=>{setCategory("Сервисы")}}  >Сервисы</li>
                <li style={category=="Новости" ? {color: "rgba(95, 224, 216, 1)"}:{}} onClick={()=>{setCategory("Новости")}}>Новости</li>
                <li style={category=="Виджеты" ? {color: "rgba(95, 224, 216, 1)"}:{}} onClick={()=>{setCategory("Виджеты")}}>Виджеты</li>
              </ul>
          </div>
          <hr />
            <ProServices category={category} />
          </div>
        </section>
       </main>
    </>
  )
}

export default Home