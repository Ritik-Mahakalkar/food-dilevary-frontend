import React from 'react'
import './Complaint_form.css'
const Complaint_form = () => {
  return (
    <div>
        <div className='add_product'>
        <div className="productfild">
            <h2>COMPLAINT</h2>
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
            
             <input   type="text"  name='product_name' required/>
             <label > Product Name</label>
        </div>
        <div class=" input_box">
            
             <input   type="text"  name='order_id' required/>
             <label > Order Id</label>
        </div>
        <div class=" input_box">
            
             <input   type="text"  name='complaint' required/>
             <label > Complaint</label>
        </div>
       
        <div className="addproduct_itemfield">
        <label htmlFor='file_input'>upload Photo</label>
            <input   type='file'  name='img' id='file_input' hidden/>
        </div>
        
        <button className="add_btn">Submit</button>
        </div>
        
    </div>
      
      
    </div>
  )
}

export default Complaint_form
