import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowLogin}) => {
    const [currentState,setCurrentState]=useState("Login");
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">

            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currentState==="Login"?<></>:<input type="text" placeholder='Name' required />}
                
                <input type="email" placeholder='emali' required />
                <input type="password" placeholder='password' required />
            </div>
            <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
             <div className="login-popup-condition">
                <input type="checkbox" required />
                <p className='para'>I aggree terms and condition and privacy policy.</p>
             </div>
             {currentState==="Login"?<p className='para'>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:<p className='para'> Have already account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
             
             
        </form>
      
    </div>
  )
}

export default Loginpopup
