import React from 'react'

import './Branch.css'

const BranchHome = () => {
  return (
    <div>
      <div className='add_product '>
        <div className="productfild ">
            <h2>Frenchise Application</h2>
            <div class=" input_box">
            
             <input   type="text"  name='name' required/>
             <label > Name Of Resturant</label>
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
            
             <input   type="text"  name='owner' required/>
             <label > Owner</label>
        </div>
        <div class=" input_box">
            
             <input   type="number"  name='Income' required/>
             <label > Annual Income</label>
        </div>
        <div class=" input_box">
            
             <input   type="text"  name='address' required/>
             <label > Address</label>
        </div>
        <div class=" input_box">
            
             <input   type="text"  name='gstno' required/>
             <label > GST NO.</label>
        </div>
        <div class=" input_box">
            
             <input   type="text"  name='lisance' required/>
             <label > lisance No.</label>
        </div>
        
        <div className="addproduct_itemfield">
        <label htmlFor='file_input'>upload form</label>
            <input   type='file'  name='img' id='file_input' hidden/>
        </div>
        
        <button className="add_btn">Submit</button>
        </div>
        
    </div>
      
      
    </div>
  )
}

export default BranchHome
