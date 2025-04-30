import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgLogin from './images/imgLogin.png';
import Linkdin from '../component/images/Linkdin.png';
import google from '../component/images/google.png';
import { GoogleLogin } from '@react-oauth/google';
import Home from '../pages/Home';
import '../style/Logmidle.css';

function Logmidle() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 1. Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    
    // 2. Check if user exists and credentials match
    if (!storedUser) {
      setError('No account found. Please sign up first.');
      return;
    }
    
    if (email !== storedUser.email) {
      setError('Email not found');
      return;
    }
    
    if (password !== storedUser.password) {
      setError('Incorrect password');
      return;
    }
    
    // 3. If everything matches - login successful
    console.log('Login successful:', { email });
    setError('');
    
    // 4. Redirect to home/dashboard
    navigate('/home'); // Change to your desired route after login
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Implement Google OAuth login
  };

  const handleLinkedInLogin = () => {
    console.log('LinkedIn login clicked');
    // Implement LinkedIn OAuth login
  };

  return (
    <div className='bigdiv'>
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Login into your account</p>
        
        {/* Error message display */}
        {error && <div className="error-message">{error}</div>}
        
        <div className="social-login-container">
          <button 
            className="social-login-button google-button"
            onClick={handleGoogleLogin}
          >
            <img src={google} alt="Google" />
            <GoogleLogin 
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => console.log("login failed")}
            />
          </button>
          
          <button 
            className="social-login-button linkedin-button"
            onClick={handleLinkedInLogin}
          >
            <img src={Linkdin} alt="LinkedIn" />
          </button>
        </div>
        
        <div className="divider">
          <span className="divider-text">Or continue with</span>
        </div>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-footer">
            <a href="/recover-password" className="recover-link">
              Recover Password
            </a>
          </div>
         
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>

      <div className='imgLogin'>
        <img src={imgLogin} alt="Login visual" />
      </div>
    </div>
  );
}

export default Logmidle;