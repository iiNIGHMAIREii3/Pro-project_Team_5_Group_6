import React from 'react';

const JobSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Find Your Dream Job with Us</h1>
          <p>We offer you many choices of jobs that suit you</p>
        </div>
      </div>
      <div className="search-bar-container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Job title, keywords, or Company name" 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default JobSearch; 