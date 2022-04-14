import React from 'react'
import "./cartItem.scss"

const CartItem = React.memo(function CartItem(prop) {
  return (
    <div className='cart-item-container'>
        <img src = {prop.data.imageUrl} alt={prop.data.name}/>
        <div className='item-details'>
          <span className='name'>{prop.data.name}</span>
         <span className='price'>{prop.data.quantity} x ${prop.data.price}</span>
        </div>
       
    </div>
  )
}
)
export default CartItem