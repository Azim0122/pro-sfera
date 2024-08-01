import React from 'react'
import './Video.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Slide from '../../components/slide/Slide'
import NavbarHome from '../../components/navbarHome/NavbarHome'
function Video() {
    const navigate = useNavigate()

    return (
        <>
           <NavbarHome />
           <main>   
               <div className="container4">
               <div className="search-results-vid">
                           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                               return (
                                <div className="info1-box-vid">
                                <div className="name-info-vid">
                                    <div className="name-vid">
                                        <div className="img-info-vid">
                                            <img src="https://s3-alpha-sig.figma.com/img/c64e/87cf/a9e50b54cc93ec7867d8c5449261b6b5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KPUvQN7BNLjBBcrHPJ6-4y1AUOnfNRRzCqI9E3UEXXT1fy4Gs3W9PCCxoHkaIAp-RzS2K1kb5sPL7RzO9Wc26SkMY0ntu4LoS9tlsdvS5OvKd8k7AAMyVLSPN0fFHvlX9z5lr0F95I7wknE3eTkO7As3KtyOfpxzKdKoRVkuX6L0H0GFHQQIxbWUDMq1E4h2zkrncfv6DVmhVQEH4y8YS9a~mCeVaxtzKHWs-nebty3rpilkPciLA8p3DpMTZYsJjjx1PIH4tZHwCRS1Fja~wJzRnjyco3wXx139oz8JXGWMvWi7eY4o6VR5xkbLgNMiChfHbC9Qo2zKFd0aLMWkEw__" alt="" />
                                        </div>
                                        <div className="name-product-vid">
                                            <h4> <b>Youtube</b></h4>
                                            <a href=""><img src="./public/imgs/Check.svg" alt="" />Fresh Nike</a>
                                        </div>
                                    </div>
                                    <div className="other">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </div>
                                </div>
                                <hr />
                                <div className="about-results-vid">
                                <div className="about-img-vid">
                                
                                    <iframe  src="https://www.youtube.com/embed/pIYVZV2tfIg" title="Jah Khalib х Мот -Ты Рядом" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                    <div className="about-text-vid">
                                        <Link>
                                        <h1>Nike Кроссовки зимние air jordan 1</h1>
                                        </Link> 
                                        <div className="about-bottom-vid">
                                    <h3>Youtube</h3>
                                        <span className='date'>1 месяц назад</span>
                                        </div>
                                    </div>
                                    
                                </div>
                               

                            </div>
                               )
                           })}
                            
                            <div className="button3">
                                <button>Смотреть все</button>
                              </div>
                 </div>
                 </div>
           </main>
        </>
    )
}

export default Video