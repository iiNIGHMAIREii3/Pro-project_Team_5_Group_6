import React from 'react';
import { useNavigate } from 'react-router-dom';
import Job from '../pages/Job';

const JobPost = ({ jobs }) => {
  const navigate = useNavigate(); // <-- Moved inside the component
  
  return (
    <div className="job-listings">
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <div className="job-card-left">
            <img src={job.logo} alt={job.company} className="company-logo" />
          </div>
          <div className="job-card-middle">
            <h3>{job.title}</h3>
            <div className="job-details">
              <span className="company-name">{job.company}</span>
              <span className="job-type">{job.type}</span>
              <span className="time-remaining">{job.location}</span>
            </div>
          </div>
          <div className="job-card-right">
            <button 
              onClick={() => navigate('/Job')} // <-- Fixed case (lowercase 'n')
              className="apply-now-btn"
            >
              Apply Now
            </button>
          </div>
        </div>
      ))}

      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>...</button>
        <button>8</button>
      </div>
    </div>
  );
};

export default JobPost;