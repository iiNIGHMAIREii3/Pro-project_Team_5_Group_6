import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import accepted from '../component/images/accepted.png'
import '../style/Accepted2.css';

const Accepted2 = () => {
  const navigate = useNavigate();

  return (
    <div className="accepted-page">
      <Navbar />
      
      <div className="accepted-container">
        <div className="accepted-card">
          <div className="success-icon">
            <img src={accepted} alt="success" className="success-image" />
          </div>
          
          <div className="content-wrapper">
            <h1 className="congratulations-title">
              Congratulations, you have succeeded<br />
              you can move on to the test.
         
            </h1>

            <button 
              className="next-button"
              onClick={() => navigate('/Test')}
            >
              Go To The Next Step →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accepted2; 