import React, { useState } from 'react';
import '../style/Jobpage.css'
import ApplyModal from './ApplyModal';
import { useNavigate } from 'react-router-dom';

function Jobpage({ jobData }) {
  const [showApplyModal, setShowApplyModal] = useState(false);
  // This component takes a jobData prop that contains all job information
  // This allows changing the content for each job post
  const navigate = useNavigate();
  return (
    <div className="job-container">    
      <ApplyModal show={showApplyModal} onClose={() => setShowApplyModal(false)} />
      {/* Related Jobs Panel - Positioned at top right */}
      <div className="related-jobs-panel">
        <div className="related-jobs-header">
          Related Jobs
        </div>
        {jobData.relatedJobs.map((job, index) => (
          <div key={index} className="related-job-item">
            <div className="related-job-logo" >
              {job.logo }
            </div>
            <div className="related-job-details">
              <div className="related-job-title">
                {job.title}
                <button className="close-button">×</button>
              </div>
              <div className="relogolated-job-company">{job.company}</div>
              <div className="related-job-info">
                <span className="remote-tag">{job.remote ? 'Remote' : 'On-site'}</span>
                <span className="salary-range">{job.salary}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Main Job Posting */}
      <div className="job-posting">
        {/* Job Header */}
        <div className="job-header">
        <div className="company-logo">
  {jobData.logo 
    ? <img src={jobData.logo} alt="Company Logo" /> 
    : jobData.company.charAt(0)
  }
</div>
          <div className="job-title-section">
            <h1 className="job-title">{jobData.title}</h1>
            <div className="company-name">
              {jobData.company}
              <div className="rating">
              {Array(5).fill().map((_, i) => (
  <span key={i} className={`star ${i < jobData.rating ? 'filled' : ''}`}>★</span>
))}

              </div>
            </div>
          </div>
        </div>

        {/* Job Meta Information - 3 columns layout */}
        <div className="job-meta">
          <div className="meta-item">
            <div className="meta-label">Job type:</div>
            <div className="meta-value">{jobData.jobType}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Location:</div>
            <div className="meta-value">{jobData.location}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Salary:</div>
            <div className="meta-value">{jobData.salary}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Experience:</div>
            <div className="meta-value">{jobData.experience}</div>
          </div>
        </div>
        {/* Job Content - 2 columns layout */}
        <div className="job-content">
          {/* Left column - Job description */}
          <div className="job-description-column">
            <div className="job-description-section">
              <h2 className="section-title">Job description</h2>
              <p className="description-text">{jobData.description}</p>
            </div>
          </div>
          
          {/* Right column - Key responsibilities */}
          <div className="key-responsibilities-column">
            <h2 className="section-title">Key Responsibilities</h2>
            <ul className="responsibilities-list">
              {jobData.responsibilities.map((item, index) => (
                <li key={index} className="list-item">{item}</li>
              ))}
            </ul>
            
            <h2 className="section-title">Requirements</h2>
            <ul className="requirements-list">
              {jobData.requirements.map((item, index) => (
                <li key={index} className="list-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Button */}
        <div className="apply-container">
          <button className="apply-button" onClick={() => setShowApplyModal(true)}>Apply now</button>
        </div>
      </div>
    </div>
  );
}

export default Jobpage;