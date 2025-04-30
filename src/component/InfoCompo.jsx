import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/Profile.css'


const ProfileComponent = () => {
  const location = useLocation();
  
  // Get user data from localStorage (fallback to location.state or empty object)
  const storedUserData = JSON.parse(localStorage.getItem('userData')) || {};
  const routeUserInfo = location.state?.userInfo || {};
  
  
  // Initialize form data with stored values
  const [formData, setFormData] = useState({
    fullName: storedUserData.fullName || routeUserInfo.fullName || '',
    email: storedUserData.email || routeUserInfo.email || '',
    jobTitle: ''
  });
  

  // Optional: Load data when component mounts
  useEffect(() => {
    if (storedUserData.fullName || storedUserData.email) {
      console.log('Loaded user data from localStorage:', storedUserData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated data to localStorage
    localStorage.setItem('userData', JSON.stringify({
      ...storedUserData,
      ...formData
    }));
    console.log('Form submitted and saved:', formData);
    alert('Profile saved successfully!');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log('File uploaded:', file);
    // Handle file upload logic here
  };

  return (
    <div >     
      {/* Personal Information Form */}
      <div className="profile-container">



      <div className="cv-section">
        <h2>Your CV/Resume</h2>
        <div className="upload-area">
          <div className="upload-box">
            <input
              type="file"
              id="cv-upload"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx"
              style={{ display: 'none' }}
            />
            <label htmlFor="cv-upload" className="upload-label">
              <div className="upload-icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <p>Drag & drop files or Browse</p>
              <span className="file-types">Supported formats: DOC, PNG, PDF</span>
            </label>
          </div>
          <button className="pdf-button">Get A PDF Version</button>
        </div>
      </div>
      <div className='info-part'>
      <form onSubmit={handleSubmit} className="info-form">

        <div className="email-row">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form-input"
          />

          <div className='info-save'>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="form-input"
        />
        </div>
          
        </div>
        
        <button type="submit" className="save-button">
          Save Your Information
        </button>
      </form>

      {/* CV/Resume Upload Section */}
     

      


      
      </div>
      
      </div>
    
    </div>
    
  );
};

export default ProfileComponent;