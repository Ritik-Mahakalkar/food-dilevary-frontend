import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <h2>CONTACT US</h2>
            <hr/>
      <div className="contact">
      <div className="left">
        <div className="contact_details">
            
            <h4>Contact Detail</h4>
            <p className='para'>  9834670878</p>
            <p className='para'>  ritikmahakalkar@gmail.com</p><br/>
            <p className='para'>27/7 helpline : 0875789135</p>
         </div>
         <br/>
         <div className="address">
          <h4>Address</h4>
          <p  className='para'> HEAD OFFICE : plot no.75 kharbi road, nagpur</p>
          <p  className='para'> 37145896</p><br/>


         </div>
         <div className="complaint">
          <h4>Complaint</h4>
          <p className="para">24/7  helpline :7894561235</p>
          <br/>
         </div>
         <div className="Gst">
          <h4>GST NO</h4>
          <p className="para">14578965123</p><br/>
         </div>
         <div className="organization">
          <h4>organization</h4>
          <p className="para">Mahakalkar international Pvt.Ltd.</p>
         </div>
      </div>
      <hr/>
      <div className="right">

                <div className='contact-form'>
                      <div className="contactfild">
                           <h2>Contact</h2>
                           <div class=" input">
                           <label > Name</label>
                              <input   type="text"  name='name' required/>
                               
                            </div>
                            <div class=" input">
                            <label > email</label>
                              <input   type="email"  name='name' required/>
                              
                            </div>
                            <div class=" input">
                            <label > phone</label>
                              <input   type="phone"  name='name' required/>
                               
                            </div>
                            <div class=" input">
                            <label > message</label>
                            <textarea type='text' name="message" rows="4" cols="40"></textarea>
                              
                            </div>
                           <button className="btn">Submit</button>
                      </div>
        
                  </div>
        
      </div>
      
      
    </div>
    </div>
  )
}

export default Contact
