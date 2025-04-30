import React, { useState } from 'react';
import '../style/Filter.css'; // Import your CSS file for styling


const Filter = () => {
  // State for all filter options
  const [datePosted, setDatePosted] = useState('Last 24 Hours');
  const [jobTypes, setJobTypes] = useState({
    fullTime: false,
    partTime: false,
    contract: false,
    volunteer: false,
    internship: false,
    remote: false,
    hybrid: false,
    onSite: false
  });
  const [location, setLocation] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Intermediate');
  const [salaryRange, setSalaryRange] = useState({ min: 20, max: 2200 });
  const [manualSalary, setManualSalary] = useState({ from: '', to: '' });
  const [currency, setCurrency] = useState('Dollar');

  // Handle job type checkbox changes
  const handleJobTypeChange = (e) => {
    const { name, checked } = e.target;
    setJobTypes(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  // Handle salary range change
  const handleSalaryRangeChange = (e) => {
    const { name, value } = e.target;
    setSalaryRange(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  // Handle manual salary input
  const handleManualSalaryChange = (e) => {
    const { name, value } = e.target;
    setManualSalary(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setDatePosted('Last 24 Hours');
    setJobTypes({
      fullTime: false,
      partTime: false,
      contract: false,
      volunteer: false,
      internship: false,
      remote: false,
      hybrid: false,
      onSite: false
    });
    setLocation('');
    setExperienceLevel('Intermediate');
    setSalaryRange({ min: 20, max: 2200 });
    setManualSalary({ from: '', to: '' });
    setCurrency('Dollar');
  };

  return (
    <div className="filter-container">
      <h1>Filter</h1>
      
      <div className="filter-section">
        <h2>Date Posted</h2>
        <select 
          value={datePosted} 
          onChange={(e) => setDatePosted(e.target.value)}
          className="filter-select"
        >
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Any Time</option>
        </select>
      </div>

      <div className="filter-section">
        <h2>Job Type</h2>
        {Object.entries(jobTypes).map(([key, value]) => (
          <div key={key} className="checkbox-option">
            <input
              type="checkbox"
              id={key}
              name={key}
              checked={value}
              onChange={handleJobTypeChange}
            />
            <label htmlFor={key}>
              {key.split(/(?=[A-Z])/).join('-').replace(/-/g, ' ')}
            </label>
          </div>
        ))}
      </div>

      <div className="filter-section">
        <h2>Location</h2>
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="location-input"
        />
      </div>

      <div className="filter-section">
        <h2>Experience Level</h2>
        <select
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
          className="filter-select"
        >
          <option>Entry Level</option>
          <option>Intermediate</option>
          <option>Expert</option>
          <option>Director</option>
          <option>Executive</option>
        </select>
      </div>

      <div className="filter-section">
        <h2>Salary Range</h2>
        <div className="range-slider">
          <span>${salaryRange.min}</span>
          <input
            type="range"
            min="0"
            max="5000"
            name="min"
            value={salaryRange.min}
            onChange={handleSalaryRangeChange}
          />
          <input
            type="range"
            min="0"
            max="5000"
            name="max"
            value={salaryRange.max}
            onChange={handleSalaryRangeChange}
          />
          <span>${salaryRange.max}</span>
        </div>

        <div className="manual-salary">
          <h3>Input Manually</h3>
          <div className="manual-inputs">
            <input
              type="number"
              placeholder="From"
              name="from"
              value={manualSalary.from}
              onChange={handleManualSalaryChange}
            />
            <input
              type="number"
              placeholder="To"
              name="to"
              value={manualSalary.to}
              onChange={handleManualSalaryChange}
            />
          </div>
        </div>

        <div className="currency-selector">
          <h3>Currency</h3>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="filter-select"
          >
            <option>Dollar</option>
            <option>Euro</option>
            <option>Pound</option>
            <option>Yen</option>
          </select>
        </div>
      </div>

      <button onClick={resetFilters} className="reset-button">
        Reset all filter
      </button>
    </div>
  );
};

export default Filter;