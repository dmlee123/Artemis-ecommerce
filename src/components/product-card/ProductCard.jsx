import React from 'react'
import "./productCard.scss"
import Button, {buttonTypeClasses} from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from "../../store/cart/cart.action"
import { selectCartItems } from '../../store/cart/cart.selector'

function ProductCard(prop) {
 

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => {
      return dispatch(addItemToCart(cartItems, prop.product));
    }

  return (
    <div className = "product-card-container">
        <img src = {prop.product.imageUrl} alt ={`${prop.product.name}`} />
        <div className='footer'>
            <span className='name'>{prop.product.name}</span>
            <span className='price'>{prop.product.price}</span>
        </div>
        <Button buttonType = {buttonTypeClasses.inverted} onClick = {addProductToCart}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard;