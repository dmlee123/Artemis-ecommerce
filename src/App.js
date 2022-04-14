import React from 'react';
// import Homepage from './routes/homepage/Homepage.jsx';
// import Navigation from './routes/navigation/Navigation';
// import Authentication from './routes/authentication/Authentication';
// import Shop from './routes/shop/Shop.jsx';
// import Checkout from './routes/checkout/Checkout.jsx';
import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from './utils/firebase/firebase';
import { setCurrentUser } from './store/user/user.action.js';
import { useDispatch } from 'react-redux';
import Spinner from './components/Spinner/Spinner';


const Homepage = lazy(() => import('./routes/homepage/Homepage.jsx'));
const Navigation = lazy(() => import('./routes/navigation/Navigation'));
const Authentication = lazy(() =>
	import('./routes/authentication/Authentication')
);
const Shop = lazy(() => import('./routes/shop/Shop.jsx'));
const Checkout = lazy(() => import('./routes/checkout/Checkout.jsx'));


function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<div className='App'>
			<Suspense fallback = {<Spinner />}>
				<Routes>
					<Route path='/' element={<Navigation />}>
						<Route index element={<Homepage />} />
						{/* Need <Outlet in the <Navigation for the nested/child components below to render, <Outlet will know what to render base off url path  */}
						<Route path='shop/*' element={<Shop />} />
						<Route path='auth' element={<Authentication />} />
						<Route path='checkout' element={<Checkout />} />
					</Route>
				</Routes>
			</Suspense>
		</div>
	);
}

// path just takes you the url and then React renders whats inside element. Anything afterwards like shop/* (* means anything), react doesnt care bc the fact that you put the /* means you probably have more routes set up in <Shop so it will deal with it there

export default App;
