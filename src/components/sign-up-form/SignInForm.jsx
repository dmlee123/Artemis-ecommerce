import React from 'react'
import { useState } from 'react' 
import { signInAuthUserWithEmailAndPassWord, createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase';
import Button, {buttonTypeClasses} from '../button/Button';
import FormInput from '../formInput/FormInput';
import "./signInForm.scss"




function SignInForm() {



  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const resetFormFields = () => {
    setFormFields({
      email: "",
      password: "",
    })
  }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassWord(formFields.email, formFields.password)
      console.log(response)
      resetFormFields();

    } catch(error){
      // switch(error.code){
      //   case "auth/user-not-found":
      //    alert("Email not found")
      //     break
      //   case "auth/wrong-password":
      //     alert("Incorrect password for email")
      //     break
      //   default:
      //     console.log(error)
      // }  
      if (error.code === "auth/wrong-password"){
        alert("Incorrect password for email")
      } else if (error.code === "auth/user-not-found"){
        alert("Email not found")
      } else {
        console.log(error)
      }
     
    }
  }

  const handleChange = (event) => {
      // need brackets over event.target.name bc if not it wont grab that name, it will literally grab "event.target.name"
      // it uses event.target.name to distinguish which name to use
      // need spread since there are multiple formFields and only one is changing
     setFormFields({...formFields, [event.target.name]:event.target.value})
  }

  return (
    <div className = "sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
       <form onSubmit = {handleSubmit}>
     
        <FormInput label = 'Email' autoComplete = "new-password" type = "email" required onChange ={handleChange} name ="email" value = {formFields.email}/>

        <FormInput label = 'Password' autoComplete = "new-password" type="password" required onChange ={handleChange} name ="password" value = {formFields.password} minLength = "8"/>
          <div className = "buttons-container">  
            <Button type ="submit" >Sign in</Button>
            <Button type ="button" buttonType = {buttonTypeClasses.google} onClick = {signInWithGoogle} >Google sign in</Button>
          </div>
       </form>
    </div>
  )
}

//need a type="button" for line 84 - the google sign in button - bc if not it will trigger the "email not found" alert bc by default, button is type="submit" in forms so it will submit the form

export default SignInForm