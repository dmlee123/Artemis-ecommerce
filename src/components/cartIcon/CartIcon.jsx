import React from 'react'
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cartIcon.styles.js"
import { useDispatch, useSelector } from "react-redux"
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js'
import { setIsCartOpen } from "../../store/cart/cart.action"

function CartIcon() {

  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)
   
    //create toggle function setting isCartOpen from true to false
    const toggleIsCartOpen = () => {
        return dispatch(setIsCartOpen(!isCartOpen));
    }
 
  return (
    <CartIconContainer onClick = {toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
