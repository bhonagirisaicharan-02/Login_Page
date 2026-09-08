import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
     <Link to="/"> <h1>Logo</h1> </Link>
      <ul>
        <li>

          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>



      </ul>
    </div>
  )
}

export default Navbar
