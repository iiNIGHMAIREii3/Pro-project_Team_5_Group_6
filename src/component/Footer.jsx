import React from 'react'
import '../style/Footer.css'

const Footer=()=> {
    const fields1=['About us','services','careers']
    const fields2=['Email: info@hrsolutions.com','Phone: +1 (123) 456-7890','UMBB ']
    const fields3=['LinkdIn','facebook','Github']


  return (
    <div className='Ftxt1'>
    <div className='f1'>
      <div className='title'>Quick Links</div>
      <ul>
        {fields1.map((field1, index) => {
          return <li key={index}>{field1}</li>
        })}
      </ul>
    </div>
    
    <div className='f2'>
      <div className='title'>Contact Us</div>
      <ul>
        {fields2.map((field2, index) => {
          return <li key={index}>{field2}</li>
        })}
      </ul>
    </div>
    
    <div className='f3'>
      <div className='title'>Follow Us</div>
      <ul>
        {fields3.map((field3, index) => {
          return <li key={index}>{field3}</li>
        })}
      </ul>
    </div>
  </div>
  )
}

export default Footer