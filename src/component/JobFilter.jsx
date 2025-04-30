import React from 'react';

const JobFilter = ({ filters, setFilters }) => {
  return (
    <div className="filter-sidebar">
      <h3>Filter</h3>
      
      <div className="filter-section">
        <h4>Job Type</h4>
        <label className="checkbox-label">
          <input type="checkbox" name="fulltime" />
          <span className="checkbox-text">Full Time</span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" name="parttime" />
          <span className="checkbox-text">Part Time</span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" name="remote" />
          <span className="checkbox-text">Remote</span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" name="contract" />
          <span className="checkbox-text">Contract</span>
        </label>
      </div>

      <div className="filter-section">
        <h4>Location</h4>
        <select className="location-select">
          <option>All Locations</option>
          <option>Remote</option>
          <option>United States</option>
          <option>Europe</option>
        </select>
      </div>

      <div className="filter-section">
        <h4>Experience Level</h4>
        <input type="range" min="0" max="10" className="range-slider" />
        <div className="range-labels">
          <span>0 years</span>
          <span>10 years</span>
        </div>
      </div>

      <div className="filter-section">
        <h4>Salary Range</h4>
        <input type="range" min="0" max="150000" step="1000" className="range-slider" />
        <div className="range-labels">
          <span>$0</span>
          <span>$150k</span>
        </div>
      </div>

      <button className="apply-filter-btn">Reset all filters</button>
    </div>
  );
};

export default JobFilter; 