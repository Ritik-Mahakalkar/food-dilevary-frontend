import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './SideHome.css'
import { Routes,Route } from 'react-router-dom'
import Job_application from '../Job_application/Job_application'
import Homephoto from '../Homephoto/Homephoto'
const SideHome = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <Homephoto/>
      
      
    </div>
  )
}

export default SideHome
