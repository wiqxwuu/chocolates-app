import React from 'react'
import './Product.css'

function Product({name, price, discount, present, newPrice, tastes, image}) {
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className={`present ${present? "true":"false"}`}>{present}%</div>
      <div className='description'>
        <h4>{name}</h4>
        <span className="price">Цена: {price} сомов</span>
        <span className={`price ${discount? "true":"false"}`}>Новая цена: {newPrice} сомов</span>
        <ul>Вкусы: 
        {tastes.map((element)=>{
        return(
        <li> {element}, </li>
        )
        })}
        </ul>
      </div>
    </div>
  )
}

export default Product
