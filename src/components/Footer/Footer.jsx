import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
      <div className='footer' id='footer'>
         <div className="logo">
          <img src={assets.logo3} alt=''/>
          
         </div>
         <ul className="footer_link">
         <Link to="/Offices"><li>Offices</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
         </ul>
         <div className="footer_social_icon">
          <div className="footer_icon">
             <img src={assets.facebook_icon} alt=''/>
          </div>
          <div className="footer_icon">
          <a href='https://github.com/Ritik-Mahakalkar/NetflixClone'><img src={assets.twitter_icon} alt=''/></a>
          </div>
          <div className="footer_icon">
             <a href='https://github.com/Ritik-Mahakalkar/NetflixClone'><img src={assets.linkedin_icon} alt=''/></a>
          </div>
          
         </div>
         
         <p> Copyright @ cooking-All right are reserverd</p>
         
      </div>
    )
  }
  
  export default Footer
  