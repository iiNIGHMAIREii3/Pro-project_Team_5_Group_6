import React, { useState } from 'react';
import google from '../component/images/google.png';
import Linkdin from '../component/images/Linkdin.png';
import SignUpImg from '../component/images/SignUp .png';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Login'
import JobPosting from '../pages/JobPosting'
import '../style/SignUp.css';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify({
      fullName,
      email,
      // Note: Storing passwords in localStorage is not secure for production
      // This is just for demo purposes
      password
    }));
    
    console.log({ fullName, email, password, confirmPassword });
    // Add any additional signup logic here
    
    // Navigate to info page after signup
    navigate('/JobPosting'); // Change this to your actual info page route
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Implement Google OAuth login
  };

  return (
    <div className="signup-container">
      {/* Left section with illustration */}
      <div className="signup-illustration">
        <img src={SignUpImg} alt="Sign Up Illustration" style={{ maxWidth: '70%', height: 'auto' }} />
      </div>
      
      {/* Right section with actual form */}
      <div className="form-section">
        <div className="form-container">
          <div className="login-link-container">
            <p className="login-text">
              have an account? 
              <span
                style={{ color: 'orange', cursor: 'pointer' }}
                onClick={() => navigate('/Login')}
              >
                Login!
              </span>
            </p>
          </div>

          {/* Main Content */}
          <div className="main-heading">
            <h1 className="main-title">Get Started With Us</h1>
            <p className="main-subtitle">Getting started is easy</p>
          </div>

          {/* Social Login Options */}
          <div className="social-login">
            <div className="google-login-btn" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.375rem', width: '20%', minHeight: '8px'}}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {console.log(credentialResponse);}}
                onError={()=>console.log("login failed")}
                shape='circle'
              />
            </div>
            <button className="social-button">
              <img src={Linkdin} alt="LinkedIn" className="social-icon" />
              <span className="social-text">LinkedIn</span>
            </button>
          </div>

          {/* Divider */}
          <div className="divider">
            <div className="divider-line"></div>
            <p className="divider-text">Or continue with</p>
            <div className="divider-line"></div>
          </div>
          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Full Name"
                className="input-field"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter Email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁" : "👁‍🗨"}
              </button>
            </div>
            
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "👁" : "👁‍🗨"}
              </button>
            </div>
            
            <button
              type="submit"
              className="submit-button"
              onClick={() => navigate('/JobPosting')}
            >
              <span >Register</span>
            </button>
          </form>
          
          {/* Terms of Use */}
          <p className="terms-text">
            By continuing you indicate that you read and agreed to the Terms of Use
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;