import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import "./checkoutItem.scss"
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'

function CheckoutItem(prop) {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    
    const clearItemHandler = () => {
        return dispatch(clearItemFromCart(cartItems, prop.data))
    }
    const addItemHandler = () =>{
        return dispatch(addItemToCart(cartItems, prop.data))
    }
    const removeItemHandler = () => {
       return dispatch(removeItemFromCart(cartItems, prop.data))
    }
    
  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src = {prop.data.imageUrl} alt = {prop.data.name} />
        </div>
        <span className ="name">{prop.data.name}</span>
        <span className = "quantity">
           <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
           <span className='value'>{prop.data.quantity}</span> 
             <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
        <span className='price'>${prop.data.price}</span>
        <div className='remove-button' onClick = {clearItemHandler}>&#10005;</div>

    </div>
  )
}


export default CheckoutItem
