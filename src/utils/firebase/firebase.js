//firebase is very opinionated so just follow these steps below
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	// signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	getDocs,
	query,
} from 'firebase/firestore';

// Your web app's Firebase configuration -get this from firebase website after making DB
const firebaseConfig = {
	apiKey: 'AIzaSyBtmW1Q_ZdgPNQ974AZdH7eKuyFHWZJIks',
	authDomain: 'artemis-db-8d706.firebaseapp.com',
	projectId: 'artemis-db-8d706',
	storageBucket: 'artemis-db-8d706.appspot.com',
	messagingSenderId: '854839380421',
	appId: '1:854839380421:web:f08aed2b84c1afe5cb23ac',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// using google provider as a way to login - firebase has multiple providers to authenticate/sign in
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
	return signInWithPopup(auth, googleProvider);
};
// export const signInWithGoogleRedirect = () => {
// 	return signInWithRedirect(auth, googleProvider);
// };

//firestore stuff below
export const db = getFirestore();

// this function lets us use js file (data.js) to add our data into the firestore DB
// then call this function in shop.jsx in a useEffect and just run it once then delete it again after you check firestore has the data
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('done');
};


// getting the products+categories down from firestore into our app
// then run useEffect in shop.jsx to get it
export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);
	
	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
		const { title, items } = docSnapshot.data();
		// using hash table below!
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})
	return categoryMap;
};



export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {} //adding additionalInformation bc signUp with email and
) => {
	//password doesnt all the info userAuth needs
	if (!userAuth) return;
	const userDocRef = doc(db, 'users', userAuth.uid);
	// console.log(userDocRef);

	// getDoc lets use access the data we get from doc
	const userSnapshot = await getDoc(userDocRef);
	// console.log(userSnapshot);
	// console.log(userSnapshot.exists());
	// console.log(userAuth)

	//if user data does not exist, create/set the document with the data from userAuth in my collection
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log('error created the user', error.message);
		}
	}
	//if user exists, return userDocRef
	return userDocRef;
};

export const createAuthUserWithEmailAndPassWord = async (email, password) => {
	if (!email || !password) {
		return;
	}
	return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassWord = async (email, password) => {
	if (!email || !password) {
		return;
	}
	return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
