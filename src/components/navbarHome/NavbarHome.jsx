import React from 'react'
import './NavbarHome.css'
import Slide from '../slide/Slide'
import { Link, Navigate, NavLink } from 'react-router-dom'
function NavbarHome() {
    return (
        <>
            <nav>
                <div className="container3 media">
                    <Link to={"/"}>
                        <h1><img className='logo' src="./public/imgs/logo.svg" alt="" /></h1>
                    </Link>
                    <div className="search1">
                        <div className="search">
                            <div className="search-input">
                          <form action="">
                          <input type="text" name="focus" required class="search-box" placeholder="Введите ваш запрос" />
                                <button class="close-icon" type="reset"></button>
                                <button className='button-srch'><i class='bx bx-globe'></i></button>
                          </form>
                            </div>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className='btn1'>Вход по ID</button>
                        <button className='btn2 btn-settings'><i class="fa-solid fa-gear"></i></button>
                        <button className='btn2'><i class="fa-solid fa-bars"></i></button>
                    </div>
                </div>
            <main>
                <div className="container4">
                    <div className="btns">
                        <div className="search-buttons">
                            <NavLink to={'/search'}><button className='btn btn1'>Все</button></NavLink>
                            <NavLink to={'/video'}><button className='btnbtn3'>Видео</button></NavLink>
                            <NavLink to={'/pictures'}><button className='btn btn2'>Картинки</button></NavLink>
                            <NavLink to={'/news'}><button className='btnbtn4'>Новости</button></NavLink>
                            <button className='btnbtn5'>Ещё</button>
                        </div>
                    </div>
                    <div className="slide">
                        <Slide />
                    </div>
                </div>
            </main>
            </nav>

           
        </>
    )
}

export default NavbarHome