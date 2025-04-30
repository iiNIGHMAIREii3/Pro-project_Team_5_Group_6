import React from 'react';
import '../style/JobPosting.css'; // Assuming you have a CSS file for styling

const JobDetails = () => {
  return (
    <div className="job-details">
      <div className="section">
        <h2>Job description</h2>
        <p>
          We are looking for a skilled Front End Developer to join our team and bring expertise with applications in life. The ideal candidate should have a strong understanding of front-end technologies, UI/UX principles, and performance optimization techniques. You will collaborate with designers, back-end developers, and other team members to create seamless user experiences.
        </p>
      </div>

      <div className="section">
        <h2>Key Responsibilities</h2>
        <ul>
          <li>Develop and maintain user-facing features for web applications</li>
          <li>Write clean, efficient, and reusable code using HTML, CSS, and JavaScript (or TypeScript)</li>
          <li>Work with modern front-end frameworks such as React.js, Vue.js, or Angular</li>
          <li>Ensure the technical feasibility of UI/UX designs and optimize applications for maximum speed and scalability</li>
          <li>Collaborate with designers and back-end developers to integrate APIs and deliver high-quality user experiences</li>
          <li>Implement responsive designs and cross-browser compatibility</li>
          <li>Stay updated with the latest industry trends, tools, and best practices</li>
          <li>Debug and troubleshoot issues to improve application performance and functionality</li>
          <li>Use version control systems like Git/GitHub for code management</li>
        </ul>
      </div>

      <div className="section">
        <h2>Requirements</h2>
        <ul>
          <li>5+ years experience as a Front-End Developer or similar role</li>
          <li>Proficiency in HTML5, CSS3, JavaScript (ES6+), and TypeScript</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;