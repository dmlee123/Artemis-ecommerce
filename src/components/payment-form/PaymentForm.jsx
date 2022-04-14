import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { buttonTypeClasses } from "../button/Button";
import { PaymentFormContainer, FormContainer, PaymentButton } from './paymentForm'
import { useState } from 'react'
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async(event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return
        }

        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then((response) => response.json());
            console.log(response);

        const clientSecret = response.paymentIntent.client_secret

        // testing info below
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName: "Guest",
                },
            },
        });
        setIsProcessingPayment(false);

        if (paymentResult.error){
            alert("Payment Failed")
        } else {
            if (paymentResult.paymentIntent.status === "succeeded"){
                alert("Payment Successful")
            }
        }

     };

  return (
    <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment</h2>
            <CardElement />
            <PaymentButton isLoading = {isProcessingPayment} buttonType = {buttonTypeClasses.inverted} >Pay now</PaymentButton>
        </FormContainer>
    </PaymentFormContainer>
        
  )
}

export default PaymentForm;

//syntax in line 62 "disabled" - the button will be disabled if it is true