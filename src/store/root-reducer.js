import { combineReducers } from 'redux'
import { userReducer } from './user/user.reducer'
import { categoriesReducer } from './categories/category.reducer'
import { cartReducer } from './cart/cart.reducer'

// can put more reducers in here , REDUX combines all reducers into one root reducer
export const rootReducer = combineReducers({
    user: userReducer,
    category: categoriesReducer,
    cart: cartReducer,
    
})