import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slide.css"
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Link, NavLink } from "react-router-dom";



function Slide() {
    return (
        <>
            <div className="test">
                <Swiper slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Pagination]}
                    className={"mySwiper"}>
                         <SwiperSlide>
                        
                          <NavLink to={'/search'}>  <button className='btnbtn1'>Все</button></NavLink>
                        
                    </SwiperSlide>   <SwiperSlide>
                       
                        <NavLink to={'/pictures'}>  <button className='btnbtn2'>Картинки</button></NavLink>
                        
                    </SwiperSlide>   <SwiperSlide>
                        
                        <NavLink to={'/video'}>  <button className='btnbtn3'>Видео</button></NavLink>
                        
                    </SwiperSlide>   <SwiperSlide>
                        
                       <NavLink to={'/news'}>  <button className='btnbtn4'>Новости</button></NavLink>
                       
                    </SwiperSlide>   <SwiperSlide>
                        
                        <NavLink to={'/more'}><button className='btnbtn5'>Ещё</button></NavLink>
                    
                    </SwiperSlide> 
                </Swiper>
            </div>
        </>

    )
}

export default Slide