import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
const ExploreMenu = ( {category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore the menu</h1>
        <p className="exolore-menu-text">Choose form varites of  delicious food which crafted with finest ingrdiants by experts  the faverouit food of your's with resonable rate</p>
         <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img  className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}
         </div>
         <hr/>
    </div>
  )
}

export default ExploreMenu
