import React from 'react'
import { Outlet } from 'react-router-dom';
// import { ReactComponent as ArtemisSVG } from '../../assets/ArtemisSVG.svg';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.js';
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/cartIcon/CartIcon';
import CartDropDown from '../../components/cartDropdown/CartDropDown';
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector.js'
import { selectIsCartOpen } from '../../store/cart/cart.selector'


const Navigation = () => {

    // lets us grab data from redux
    // replaced selectCurrentUser with user.selector.js
    const currentUser = useSelector(selectCurrentUser)

    const isCartOpen = useSelector(selectIsCartOpen)
    
	return (
		<>
		<NavigationContainer>
                    <LogoContainer to = "/">
                    <img src= "https://cdn.shopify.com/s/files/1/1971/5017/files/Artemis_Logo_Header_95x.png?v=1570580192" alt = "" className = "logo"/>
                    </LogoContainer>
                    <NavLinks> 
                        <NavLink to = "/shop">
                            Shop
                        </NavLink>
                        {currentUser ? (
                            <NavLink as = 'span' onClick={signOutUser}>Sign Out</NavLink>
                        ): (
                            <NavLink to = "/auth"> Sign in </NavLink>
                        )}
                            <CartIcon />
                    </NavLinks>
                    {isCartOpen && <CartDropDown />}
        </NavigationContainer>
		<Outlet />
		</>
	);
};
//need <Outlet here for syntax and to show everything thats under <Navigation

export default Navigation;
