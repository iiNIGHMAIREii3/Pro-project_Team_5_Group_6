import React from 'react'
import '../style/Ready3.css'
import imgReady3 from '../component/images/imgReady3.png'

function Ready3() {
  return (
    <div className="standout-container">
    <div className="image-section">
      <img src={imgReady3} alt="Person with floating tech elements" />
    </div>
    <div className="text-section">
      <h1>Stand out to <span>top</span> tech <span>companies</span></h1>
    </div>
  </div>
  )
}

export default Ready3