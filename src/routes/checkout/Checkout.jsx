import React from "react";
import { useContext } from "react";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles.js";
import { useSelector } from "react-redux"
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector"
import PaymentForm from "../../components/payment-form/PaymentForm.jsx"


function Checkout() {

  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)


  return (
    <CheckoutContainer>
        <CheckoutHeader >
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((data) => {
          return (
            <CheckoutItem key = {data.id} data = {data}/>
          );
        })}
        <Total>Total:${cartTotal}</Total>
    <PaymentForm />
    </CheckoutContainer>
  );
}

export default Checkout;
