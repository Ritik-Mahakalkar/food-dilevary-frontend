import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../components/context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  const totalCartAmount=getTotalCartAmount()+2;
  return (
    <div>
      <form action="" className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='email' />
          <input type="text" placeholder='street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Pin code' />
            <input type="text" placeholder='Countory'/>
          </div>
          <input type="number" placeholder='phone' />


        </div>
        <div className="place-order-right">
        <div className="cart-total">
            <h2 className='promo'>Cart Total</h2>
            <div>
              <hr />
              <div className="cart-total-details">
                <p className="para">Subtotal</p>
                <b> $ {getTotalCartAmount()}</b>
                
              </div>
              <hr/>
              <div className="cart-total-details">
              <p className="para">Delivery Fee</p>
                <b>$ {getTotalCartAmount()===0?0:2}</b>
                
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b >$ {getTotalCartAmount()===0?0:totalCartAmount}</b>
                
              </div>
              
            </div>
            <button >PROCEED TO PAYMENT</button>
          </div>

        </div>
      </form>
      
    </div>
  )
}

export default PlaceOrder
