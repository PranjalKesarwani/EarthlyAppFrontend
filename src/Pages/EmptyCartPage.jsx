import React from 'react'
import NewNav from '../Components/NewNav'
import { Link } from 'react-router-dom'

const EmptyCartPage = () => {
  return (
    <React.StrictMode>
      <NewNav />

      <div id='emptycart'>
        <div id='imagContainer'>
          <img src="./images/emptycart.jpg" alt="" />
        </div>
        <div id="headingContainer">

          <h1>Your cart is empty! <Link style={{fontSize:'2rem'}} to='/'>Home</Link></h1>
          
        </div>
      </div>
    </React.StrictMode>
  )
}

export default EmptyCartPage

