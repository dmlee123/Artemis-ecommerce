import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";

// 3 helper functions  below

export const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((data) =>{
        return data.id === productToAdd.id
    });
    //if found, increment quality
    if (existingCartItem){
        return cartItems.map((data) => 
            data.id === productToAdd.id ? { ...data, quantity: data.quantity +1 } : data
        )
    }
    // return new array with modified cartitems/new cart item
    return [...cartItems, { ...productToAdd, quantity:1 }];
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
     const existingCartItem = cartItems.find((data) =>{
        return data.id === cartItemToRemove.id
    });
    // check if quantity is = 1, if so remove that item from the cart
    if (existingCartItem.quantity === 1){
             // .filter removes if its a false statement.  If its true statement, it keeps the value.  We only want to remove the value where data.id is equal to the one we are trying to remove.  So if data.id does not equal cartItemToRemove.id, keep the value.  If they do equal, then remove it
        return cartItems.filter((data) => data.id !== cartItemToRemove.id)
    }
    // return back cartItems with reduced quantity
    return cartItems.map((data) => 
            data.id === cartItemToRemove.id ? { ...data, quantity: data.quantity -1 } : data
        )
}




export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((data) => data.id !== cartItemToClear.id) 
}

export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    };

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};