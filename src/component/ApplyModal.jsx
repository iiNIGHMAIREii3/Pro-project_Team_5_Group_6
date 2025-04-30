import React from 'react';
import '../style/ApplyModal.css';
import { useNavigate } from 'react-router-dom';

function ApplyModal({ show, onClose }) {
  if (!show) return null;
  const navigate = useNavigate();
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Apply Job: Front End Developer</h3>
        <form>
          <label>Choose Resume</label>
          <select>
            <option>Select…</option>
            {/* Add options dynamically if needed */}
          </select>
          <label>Cover Letter</label>
          <textarea placeholder="Write down your biography here..." />
          <div className="modal-actions">
            <button type="submit"  className="cancel" onClick={onClose}>Cancel</button>
            <button type="submit"  onClick={() => navigate('/Accepted2')}>Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyModal;