import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    
    <div className='sidebar'>
        <Link to='/Job_application'>
        <div className="sidebar_item">
            <p>Job Application</p>
      </div>
        </Link>
      <Link to='/new_vacancies'>
      <div className="sidebar_item">
            <p>Vacencies</p>
      </div>
      </Link>
      <Link to='/Complaint'>
      <div className="sidebar_item">
            <p>Complaint</p>
      </div>
      </Link>
      <Link to='/frenchise'>
      <div className="sidebar_item">
            <p>Request of fresnchise</p>
      </div>
      </Link>
      <Link to='/more'>
      <div className="sidebar_item">
            <p>More</p>
      </div>
      </Link>
      
        
    </div>
  )
}

export default Sidebar