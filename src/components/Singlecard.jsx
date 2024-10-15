import React from 'react'
import "./Singlecard.css"

function Singlecard(img, title, description, saleQuantity) {
  
  return (
    <>

      <div className="cardBody">
        <div className="cardImage"><img src={img} alt="" /></div>
        <div className="cardData">
          <p className="cardtitle">{title}</p>
          <p className="cardDescription">{description}</p>
          <p className="cardNumber">{saleQuantity}</p>

        </div>

      </div>



    </>
  )
}

export default Singlecard