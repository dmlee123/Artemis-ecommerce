import React from 'react'
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles"
import { SpinnerButton } from './button.styles';

/*
we have 3 buttons
default
inverted
google sign in
    - what we will do is make an object(hash table on line 19) with those 3 different types and give them different css classes 
*/

export const buttonTypeClasses = {
    base: "base",
    google: 'google-sign-in',
    inverted: "inverted",
}

const getButton = (buttonType = buttonTypeClasses.base) =>
 ({
    [buttonTypeClasses.base]: BaseButton,
    [buttonTypeClasses.google]: GoogleSignInButton,
    [buttonTypeClasses.inverted]: InvertedButton,
  }[buttonType]);



function Button({ children, buttonType, isLoading, ...otherProps}) {

  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled ={isLoading} {...otherProps}>
        {isLoading ? <SpinnerButton /> : children}
    </CustomButton>
  )
}
// reason why you cannot do buttonTypeClasses.buttonType in this case is bc buttonType is attached to buttonTypeClasses (so can not change the value of buttonType)
// but with [ ] you can - is not attached to buttonTypeClasses
export default Button
