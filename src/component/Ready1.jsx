import React from 'react'
import imgReady1 from '../component/images/imgReady1.png'
import '../style/Ready1.css'

function Ready1() {
  return (
    <div className="job-landing-container">
  <h1>Ready to Land Your Next Job?</h1>
  <div className="job-content">
    <img src={imgReady1} alt="Person sitting on bean bag with laptop" />
   
    <div className="job-features">
      <h2><span className="highlight">Instant feedback</span> on your <span className="accent">skills</span></h2>
    </div>
  </div>
</div>
  )
}

export default Ready1