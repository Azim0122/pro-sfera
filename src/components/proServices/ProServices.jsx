import React from 'react'
import "./ProServices.css"

function ProServices({ category }) {
  return (
    <>
      <div className="container2">
        {
          category == "Сервисы" && <div className="boxs">

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (<div className="box">
                <div className="box-top">
                  <span>{index + 1 < 10 ? "0" : ""}{index + 1}</span>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="box-bottom">
                  <p>PRO <br />Donate</p>
                </div>
              </div>)
            })}



          </div>
        }
        {
          category == "Новости" && <div className="boxs">

           <div className="container2">
            <div className="boxs1">
              <div className="boxs1">
                <div className="box1">
                </div>
                <div className="box1">
                </div>
                <div className="box2">
                </div>
                <div className="box2">
                </div>
              </div>

              <div className="boxs1">
                <div className="box1">
                </div>
                <div className="box2">
                </div>
                <div className="box2">
                </div>
                <div className="box2">
                </div>
                <div className="box2">
                </div>
              </div>

              <div className="boxs1">
                <div className="box1">
                </div>
                <div className="box2">
                </div>
                <div className="box2">
                </div>
                <div className="box1">
                </div>
               
              </div>

            </div>
           </div>


          </div>
        }
        {
          category == "Виджеты" &&<div className="container2"> 
          <div className="boxs3">

{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
  return (<div className="box3">
   
    
  </div>)
})}
          </div>
          </div>
        }
        </div>

    </>
  )
}

export default ProServices 