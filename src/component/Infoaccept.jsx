import React from 'react';
import { useNavigate } from 'react-router-dom';

import accepted from '../component/images/accepted.png'
import '../style/Infoaccept.css';

const Accepted = () => {
  const navigate = useNavigate();

  return (
    <div className="accepted-page">
     
      
      <div className="accepted-container">
        <div className="accepted-card">
          <div className="success-icon">
            <img src={accepted} alt="success" className="success-image" />
          </div>
          
          <h1 className="congratulations-title">
            Congratulations, you are<br /> accepted !
          </h1>

          
          
        </div>
      </div>

      
    </div>
  );
};

export default Accepted;

