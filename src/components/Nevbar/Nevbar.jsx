import React, { useContext, useState } from 'react'
import "./Nevbar.css"
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
const Nevbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("Home");

    const {getTotalCartAmount} =useContext(StoreContext);


  return (
    <div className='nevbar'>
      <Link to='/'><img src={assets.logo3} alt="" className='logo'/></Link>
      <ul className="nevbar-menu">
        <Link  to='/'onClick={()=>setMenu("Home")}className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")}className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download'onClick={()=>setMenu("Mobile-app")}className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("Contact")}className={menu==="Contact"?"active":""}>Contact</a>
      </ul>
      <div className="navebar-right">
        <img src={assets.search_icon} alt=""  />
        <div className="nevbar-search-icon">
           <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Nevbar
