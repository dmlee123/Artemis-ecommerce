import React from 'react'
import { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-in-form/SignUpForm';
import SignInForm from '../../components/sign-up-form/SignInForm';
import "./authentication.scss"


function Authentication() {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(async () => {
    //    const response = await getRedirectResult(auth);
    //    if (response) {
    //        const userDocRef = await createUserDocumentFromAuth(response.user)
    //    }
    // },[])

  return (
    <div className = "authentication-container">
      <SignInForm />
     <SignUpForm/> 
    </div>
  )
}

export default Authentication