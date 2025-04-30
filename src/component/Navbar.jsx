import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import IKRAM2 from  '../component/images/IKRAM2.png'



function Navbar() {

  return (
    <div className='navbar'>
       <div className='logo'>
        <img  />
      </div>
    <div className='nav'>
     
      <div className='nav-links'>
        <div className='home'>Home</div>
        <div className='contact-us'>Contact Us</div>
        <div className='follow-us'>Follow Us</div>
        <div className='quick-links'>Quick Links</div>
      </div>
    </div>
    <div className='LoginSignUp'>
      <div className='signup'>
        <Link to='/SignUp'>
          <button>Sign Up</button>
        </Link>
      </div>
      <div className='login'>
        <Link to='/Login'>
          <button>Login</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Navbar