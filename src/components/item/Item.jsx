import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='food-item'>
        <div className="food-itm-img-container">
            <img src={props.image} alt="" className='food-item-image' />
            
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p className='para'>{props.title}</p>
                <h6>{props.company} </h6> 
            </div>
            <p className="food-item-description">{props.description}</p>
            <p className="food-item-price">{props.location} <span className='id'> job id :{props.id}</span></p>
        </div>

      
    </div>
  )
}

export default Item
