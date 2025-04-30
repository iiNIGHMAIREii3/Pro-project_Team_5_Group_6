import React from 'react'
import '../style/Ready2.css'
import imgReady2 from '../component/images/imgReady2.png'

function Ready2() {
  return (
    <div className="ai-recommendation-container">
  <div className="text-section">
    <h1>Personalized AI-driven <span className="highlight">recommendations</span></h1>
  </div>
  <div className="image-section">
    <img src={imgReady2}   />
  </div>
</div>
  )
}

export default Ready2