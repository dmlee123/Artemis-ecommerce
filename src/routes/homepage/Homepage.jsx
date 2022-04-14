import React from 'react'
import { HomepageStyles } from './homepage.styles'
import Directory from '../../components/directory/Directory'
// import { Outlet } from 'react-router-dom'

function Homepage() {

  return (
    
      <HomepageStyles> 
        {/* <Outlet />          */}
         <Directory />
      </HomepageStyles>
     
  )
}

export default Homepage