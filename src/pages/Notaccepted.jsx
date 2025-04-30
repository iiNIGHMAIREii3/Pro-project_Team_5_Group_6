import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import smallnot from '../component/images/smallnot.png'
import '../style/Notaccepted.css';

const Accepted = () => {
  const navigate = useNavigate();

  return (
    <div className="accepted-page">
      <Navbar />
      
      <div className="accepted-container">
        <div className="accepted-card">
          <div className="success-icon">
            <img src={smallnot} alt="fail" className="fail-image" />
          </div>
          
          <h1 className="congratulations-title">
            Unfortunatly you are not<br /> accepted !
          </h1>

          <div className="action-buttons">
            <button 
              className="back-button"
              onClick={() => navigate('/')}
            >
              ← Back To The Home Page
            </button>
            <button 
              className="details-button"
              onClick={() => navigate('/JobPosting')}
            >
              sorry you failed  →
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Accepted;
