import React from 'react'
import Button from '../button/Button'
import { CartDropDownContainer, EmptyMessage, CartItems} from './cartDropDown.styles'
import CartItem from '../cartItem/CartItem'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { selectCartItems } from '../../store/cart/cart.selector'
import { useCallback, useMemo } from 'react'

function CartDropDown() {

    const cartItems = useSelector(selectCartItems)    
    const navigate = useNavigate();

    // can add navigate to the array below but doesnt matter cause it wont change anyways
    const goToCheckoutHandler = useCallback(() => {
      navigate("/checkout")
    },[])


    

  return (
    <CartDropDownContainer>
        <CartItems>
          {
            cartItems.length ? cartItems.map((data) => <CartItem key = {data.id} data = {data}/>) : <EmptyMessage>Your cart is empty</EmptyMessage>
          }
        </CartItems>
        <Button onClick = {goToCheckoutHandler}>Checkout</Button>
    </CartDropDownContainer>
  )
}

export default CartDropDown