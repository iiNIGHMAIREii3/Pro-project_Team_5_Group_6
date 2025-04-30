import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import JobSearch from '../component/JobSearch';
import JobFilter from '../component/JobFilter';
import JobPost from '../component/JobPost';
import Footer from '../component/Footer';
import '../style/JobPosting.css';
import minimicrosoft from '../component/images/minimicrosoft.png'

const JobPosting = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    jobType: [],
    location: '',
    experienceLevel: '',
    salary: [0, 100000],
    currency: 'USD'
  });

  const jobs = [
    {
      id: 1,
      title: 'Principal Software Engineer',
      company: 'Microsoft',
      logo: {minimicrosoft},
      salary: '$800-1500',
      type: 'Remote',
      location: '2 days remaining',
      experience: '3 Years',
      timePosted: '2 days ago'
    },
    {
      id: 2,
      title: 'Networking Engineer',
      company: 'Dell Tech',
      logo: {minimicrosoft},
      salary: '$1000-1200',
      type: 'Full Time',
      location: '3 days remaining',
      experience: '2 Years',
      timePosted: '3 days ago'
    },
    {
      id: 3,
      title: 'Information Designer',
      company: 'Remote',
      logo: {minimicrosoft},
      salary: '$900-1100',
      type: 'Full Time',
      location: '5 days remaining',
      experience: '2 Years',
      timePosted: '1 day ago'
    },
    {
      id: 3,
      title: 'Software Engineer (Frontend)',
      company: 'Tech Solutions Inc.',
      logo: '{techsolutionsinc}',  // Replace with actual logo URL or reference
      salary: '$100,000 - $130,000',
      type: 'Full Time',
      location: 'New York, NY',
      experience: '3+ Years',
      timePosted: '2 days ago'
    },
    {
      id: 4,
      title: 'Software Engineer (Backend)',
      company: 'Innovate Systems',
      logo: '{innovatesystems}', // Replace with actual logo URL or reference
      salary: '$110,000 - $140,000',
      type: 'Full Time',
      location: 'San Francisco, CA',
      experience: '5+ Years',
      timePosted: '1 week ago'
    },
    {
      id: 5,
      title: 'Software Engineer (Full Stack)',
      company: 'Global Software Corp',
      logo: '{globalsoftwarecorp}', // Replace with actual logo URL or reference
      salary: '$120,000 - $150,000',
      type: 'Full Time',
      location: 'Austin, TX',
      experience: '4+ Years',
      timePosted: '3 days ago'
    },
    {
      id: 6,
      title: 'Software Engineer (Mobile - iOS)',
      company: 'App Development Co.',
      logo: '{appdevelopmentco}', // Replace with actual logo URL or reference
      salary: '$95,000 - $125,000',
      type: 'Contract',
      location: 'Remote',
      experience: '2+ Years',
      timePosted: '1 day ago'
    },
    {
      id: 7,
      title: 'Software Engineer (DevOps)',
      company: 'Cloud Services Ltd.',
      logo: '{cloudservicesltd}', // Replace with actual logo URL or reference
      salary: '$115,000 - $145,000',
      type: 'Full Time',
      location: 'Seattle, WA',
      experience: '6+ Years',
      timePosted: '2 weeks ago'
    }
  ];

  return (
    <div className="job-listing-page">
      <Navbar />
      <JobSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}   />
      <div className="main-content">
        <JobFilter filters={filters} setFilters={setFilters} />
        <div className="content-right">
          <JobPost jobs={jobs} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobPosting;