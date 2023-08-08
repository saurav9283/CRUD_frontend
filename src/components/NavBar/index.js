import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navBar'>
        <div className="logo">
           <h1> MyLogo</h1>
        </div>
        <div className="links">
             <NavLink to='/'>Home</NavLink>
             <NavLink to='/add'>Add Product</NavLink>
        </div>
    </div>
  )
}

export default Navbar