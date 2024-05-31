import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../components/context/StoreContext'
import Item from '../../components/item/Item';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);
  const totalCartAmount=getTotalCartAmount()+2;

  const navigate=useNavigate();

  return (
    <div>
      <div className="cart">
        <div className="cart-item">
          <div className="cart-item-title">
            <p className="para">Items</p>
            <p className="para">Title</p>
            <p className="para">Price</p>
            <p className="para">Quantity</p>
            <p className="para">Total</p>
            <p className="para">Remove</p>
          </div>
          <br/>
          <hr/>
          {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
              {
                return (
                  <div>
                  <div className="cart-item-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p className='para'>{item.name}</p>
                    <p className='para'>$ {item.price}</p>
                    <p className='para'>{cartItems[item._id]}</p>
                    <p className='para'>${item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='para cross'> X</p>
                  </div>
                  <hr/>
                  </div>
                )
              }
          })

          }

         
          
        </div>
        <div className="cart-bottom">
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
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p  className='promo'>
                If You have a promocode, Place it here 
              </p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='Promo Code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Cart
