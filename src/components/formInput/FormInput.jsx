import React from 'react'
import "./formInput.styles.scss"

// since there are so many label props, we can use spread operator to copy
function FormInput({label, ...otherProps}) {

  return (
    <div className = "group">
          {label && ( 
        <label className = {`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label>
        )}
         <input className= "form-input" {...otherProps}/>
      
    </div>
  )
}

//conditional rendering on line 10
// also added a space after "shrink " on line 11 for scss to work
export default FormInput