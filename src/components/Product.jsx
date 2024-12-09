import React from 'react'

function Product({name, price, discount, present, newPrice, tastes, image}) {
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="present">{present}</div>
      <div className='description'>
        <h4>{name}</h4>
        <span className="price">{price}</span>
        <span className={`price ${discount? "true":"false"}`}>{newPrice}</span>
        <ul>
        {tastes.map((element)=>{
        return(
        <li>{element}</li>
        )
        })}
        </ul>
      </div>
    </div>
  )
}

export default Product
