import React from 'react'
import "./Job_application.css"
import Sidebar from '../Sidebar/Sidebar'


const Job_application_form = () => {
  return (
    <div>
      
      <div className='add_product'>
        <div className="productfild">
            <h2>Job Application</h2>
            <div class=" input_box">
            
             <input   type="text"  name='name' required/>
             <label > Name</label>
        </div>
        <div class=" input_box">
            
             <input   type="number"  name='phone' required/>
             <label >Phone</label>
        </div>
        <div class=" input_box">
            
             <input   type="email"  name='email' required/>
             <label >email</label>
        </div>
        <div class=" input_box">
            
             <input   type="text"  name='education' required/>
             <label > education</label>
        </div>
        <div class=" input_box">
            
             <input   type="number"  name='jobId' required/>
             <label > Job Id</label>
        </div>
        <div class=" selection">
            
             <select   name="category"className='add_product_selector'   required>
              <option value="dilevry_boy" >Dilevary Boy</option>
              <option value="cook" >Cook</option>
              <option value="Shef" >Shef</option>
              <option value="call_center" >Call Center</option>
              <option value="technical_staff" >Technical Staff</option>
              <option value="management" >Management</option>
             <label >Job Category</label>
            </select>
        </div>
        <div className="addproduct_itemfield">
        <label htmlFor='file_input'>upload</label>
            <input   type='file'  name='img' id='file_input' hidden/>
        </div>
        
        <button className="add_btn">Submit</button>
        </div>
        
    </div>
      
    </div>
  )
}

export default Job_application_form
