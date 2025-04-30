import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import accepted from '../component/images/accepted.png'
import '../style/Accepted.css';

const Accepted = () => {
  const navigate = useNavigate();

  return (
    <div className="accepted-page">
      <Navbar />
      
      <div className="accepted-container">
        <div className="accepted-card">
          <div className="success-icon">
            <img src={accepted} alt="success" className="success-image" />
          </div>
          
          <h1 className="congratulations-title">
            Congratulations, you are<br /> accepted !
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
              onClick={() => navigate('/interview')}
            >
              now you have an interview with th AI→
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Accepted;
