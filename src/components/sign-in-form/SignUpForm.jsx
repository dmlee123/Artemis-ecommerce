import React from 'react'
import { useState } from 'react' 
import { createAuthUserWithEmailAndPassWord, createUserDocumentFromAuth} from '../../utils/firebase/firebase';
import Button, {buttonTypeClasses} from '../button/Button';
import FormInput from '../formInput/FormInput';
import "./signUpForm.scss"



function SignUpForm() {



  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const resetFormFields = () => {
    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(formFields.password !== formFields.confirmPassword){
      alert("passwords do not match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassWord(formFields.email,formFields.password);
      console.log(response)
      await createUserDocumentFromAuth(response.user, formFields.displayName);
      resetFormFields();
      
    } catch(error){
      if (error.code === "auth/email-already-in-use"){
        alert("Email already in use")
      } else { 
        console.log("user creation encountered an error" , error)
      }
    
    }
  }

  //how to use one handleChange function in a controlled form to take in multiple values
  const handleChange = (event) => {
    // console.log(event.target)
 
    // bc our state formFields have the same name as the input tag name, setFormFields is able to grab that specific FormInput and update it
    setFormFields({...formFields, [event.target.name]:event.target.value})
  }


  return (
    <div className = "sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
       <form onSubmit = {handleSubmit}>
      
        {/* only reason we need value attribute for this is becase we are using it for a css property in FormInput */}
        <FormInput label = "Display Name" autoComplete = "new-password" type = "text" required onChange ={handleChange} name ="displayName" value = {formFields.displayName}/>
        
        <FormInput label = 'Email' autoComplete = "new-password" type = "email" required onChange ={handleChange} name ="email" value = {formFields.email}/>

        <FormInput label = 'Password' autoComplete = "new-password" type="password" required onChange ={handleChange} name ="password" value = {formFields.password} minLength = "8"/>

        <FormInput label = 'Confirm Password' autoComplete = "new-password" type="password" required onChange ={handleChange} name ="confirmPassword" value = {formFields.confirmPassword} minLength = "8"/>

         {/* <FormInput label = 'Confirm Password' inputOptions = {{
           autoComplete:"new-password", type:"password", required:true, onChange:handleChange, name :"confirmPassword", value:formFields.confirmPassword, minLength: "8"
          }}
        /> */}
        {/* above - if you want to pass down props another way - putting everything into inputOptions object */}

        <Button type ="submit" >Sign Up</Button>
       </form>
    </div>
  )
}

export default SignUpForm