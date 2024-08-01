import React from 'react'
import './News.css'
import NavbarHome from '../../components/navbarHome/NavbarHome'
import { Link } from 'react-router-dom'
function News() {
  return (
    <>
         <NavbarHome />
           <main>
               <div className="container4">
               <div className="search-results-img">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                    return ( <div className="info1-box-img">
                        <div className="name-info-img">
                            <div className="name-img">
                                <div className="img-info-img">
                                    <img src="https://s3-alpha-sig.figma.com/img/4e21/a944/abead107dcd8c07ff4ecfdf874e92ef3?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXbOd3rha8gn9-2RMF5C5sWdt29jpM3zf7Kyfzp9IbH3GYpiKfqT0N7iAZQTtsvFuXOYECM~O596E6h~Jq2WpGsb2y6OrR4oOsjdDg9KW~R5sgeKoOpC8UJgRf2Eu5Fn2-V-gY97jhiIOoykYl8s5vn~Lr3CJ4YAL7ap0mio5~12dQrFtkYzXrPlRm9DY0eEkJbKPwtSLmWZxOUDvh0Bjlg5UrO1ypI2Abl--IkHFbhqiXjP3vMF68Rg7IGEZW5qjiZxw0jSEbeqUE9-pNe8-dgUDDEZL8MQNJYEsusx5LCo6JhwDWdwtazHSOjtpHi3~ckU1nM6sR3LStdlVfJL1w__" alt="" />
                                </div>
                                <div className="name-product-img">
                                    <h4> <b>iXBT.com</b></h4>
                                    <a href=""></a>
                                </div>
                            </div>
                            <div className="other">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                        <hr />
                        <div className="about-results-img">
                        
                            <div className="about-text-img">
                                <Link>
                                <h1>«Сделано на iPad». Nike выпустила уникальные кроссовки для Тима Кука</h1>
                                </Link> 
                                <div className="about-bottom-img">
                            <h3>Youtube</h3>
                                <span className='date'>1 месяц назад</span>
                                </div>
                            </div>
                            <div className="about-img-img">
                        <img src="https://s3-alpha-sig.figma.com/img/9634/6a18/dba399029d5227e7e5645df46ae4a56d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V-g-oKv3J3z7kvk36lKhVR5r2zAq64-J-o5Iq4XFIstWe7ZIAnL5HYa6vk1dfx9JaD6ztCbFWG53EWoVFpwKg~WFIeu6Zcj5n-0Muq9EXmZgrxSYKkyxz5ZU78tSh4MuTmk88buzqC-P0iPa5pvZ93dND4B882IhGexLQChgNUsK7leGzADrn1MxT311C-dHT2bh8~gFPmTK3QQMve9paDTFhjkkGGQsNpv2~YE2RwqGeseQaRW1hG8CaQtsKCi4q8W~QzY~MLkKAfsxiotbAtvqS4Avlyn9t6w47Ef3QyVIawt59srqncGjRHj098sCgl5ll4NSjasPOBhaUjFLeQ__" alt="" />
                            </div>
                        </div>
                    </div>)
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

export default News