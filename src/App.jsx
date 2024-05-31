import React, { useState } from 'react'
import Nevbar from './components/Nevbar/Nevbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Offices from './components/Offices/Offices'
import Job_application from './components/Job_application/Job_application'
import Jobs from './components/jobs/Jbos'

import Complaint from './components/Complaint/Complaint'
import More from './components/More/More'
import Branch from './components/Branch/Branch'
import Loginpopup from './components/Loginpopup/Loginpopup'




const App = () => {

  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Nevbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/offices' element={<Offices/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Job_application' element={<Job_application/>}/>
        <Route path='/new_vacancies' element={<Jobs/>}/>
        <Route path='Complaint' element={<Complaint/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/frenchise' element={<Branch/>}/>



       
      </Routes>
      
    <Footer/>
    </div>
   </>
  )
}

export default App
