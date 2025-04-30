import React from 'react'
import '../style/Login.css'
import IKRAM2 from './images/IKRAM2.png'
import { useNavigate } from 'react-router-dom';  
import SignUp from '../pages/SignUp';        



function LogNavbar() {
  const navigate = useNavigate();
  return (
    <div>
         <div className='navbar'>
        <div className='logo'>
          <img src={IKRAM2} />

         </div>

         <div className='nav'>
          <p> Don't have account ?    <span  tyle={{ color: 'blue', cursor: 'pointer' }}
         onClick={() => navigate('/signup')}> sign Up!</span>

          </p>
         </div>
         



          </div>
    </div>
  )
}

export default LogNavbar