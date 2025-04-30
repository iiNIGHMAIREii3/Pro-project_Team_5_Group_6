import React from 'react'
import '../style/Start.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'




function Start() {
  const navigate = useNavigate();
  return (
    <div className="cta-container">
      
  <button className="cta-button" onClick={() => navigate('/JobPosting')}>Start Your AI Test</button>
  
</div>
  )
}

export default Start