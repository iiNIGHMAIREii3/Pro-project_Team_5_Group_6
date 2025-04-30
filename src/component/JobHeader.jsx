import React from 'react';
import '../style/JobHeader.css';

 const JobHeader = () => {
  return (
    <div className="job-header">
      <div className="company-logo">
        <div className="logo-container">f</div>
      </div>
      <div className="header-content">
        <h1 className="job-title">Front End Developer</h1>
        <div className="company-name">Facebook</div>
        <div className="job-rating">
          <span className="stars">★★★★★</span>
        </div>
        <div className="job-meta">
          <span className="job-type">Full-time</span>
          <span className="location">Sisli, Turkey</span>
          <span className="salary">$35K-$55K</span>
        </div>
      </div>
      <div className="header-actions">
        <button className="apply-button">Apply now</button>
        <div className="action-icons">
          <button className="icon-button">🔖</button>
          <button className="icon-button">↗</button>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;