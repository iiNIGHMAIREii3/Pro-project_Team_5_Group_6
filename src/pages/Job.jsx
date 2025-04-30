import React from 'react';
import Jobpage from '../component/Jobpage';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';


function App() {
  // Sample job data - this could come from an API or database
  const jobData = {
    title: "Principal Software Engineer",
    company: "Microsoft",
    logo: "f", // You could replace this with an image URL
    rating: 5,
    jobType: "Full-time",
    location: "Sivas, Turkey",
    salary: "$50K-$65K",
    experience: "5 years",
    description: "Microsoft stands at the forefront of innovation and passion, driving the future of cybersecurity. At Microsoft Defender for Endpoint (MDE), our commitment lies in enhancing protection for both consumers and enterprises through state-of-the-art technology. Our team collaborates to create security solutions that proactively identify and counteract cyber threats, providing robust safety across various platforms, including Windows, Linux, MacOS, Android, and iOS. We are currently looking for a Principal Software Engineer with a deep understanding of Linux internals to advance our MDE Linux solution. This position entails strategic leadership and hands-on development, collaborating with top professionals to strengthen our security capabilities. The role presents a unique opportunity to significantly influence the security landscape, enhancing our product offerings while expanding your expertise within Microsoft’s vast technological framework. We prioritize your professional growth and appreciate the unique contributions you bring to our team. Our commitment to diversity and inclusivity fosters a collaborative environment where every member's input is recognized and valued. This culture not only improves our products but also promotes personal and professional development, ensuring our solutions meet the diverse needs of all users..",
    responsibilities: [
      "Lead the design, architecture, and development of Microsoft Defender for Endpoint (MDE) for Linux, ensuring cutting-edge security capabilities.",
      "Drive technical strategy and roadmaps for Linux endpoint protection, aligning with Microsoft’s broader cybersecurity vision.",
      "Mentor and guide engineering teams, fostering innovation and best practices in Linux security solutions.",
      "Develop high-performance, scalable, and secure solutions for Linux internals, including kernel modules, system monitoring, and threat detection",
      "Enhance real-time threat detection and response mechanisms for Linux environments (e.g., SELinux, auditd, eBPF).",
      
    ],
    requirements: [
      "Strong understanding of Linux kernel architecture, system calls, process management, and security subsystems (e.g., SELinux, AppArmor, eBPF).",
      "Expertise in Endpoint Detection & Response (EDR), malware analysis, and forensic tools.",
      "Experience with debugging tools (GDB, strace, perf) and performance optimization",
      "Ability to mentor engineers, define technical roadmaps, and drive consensus.",
    ],
    relatedJobs: [
      { title: "Critical Environment Progam Manager", company: "Microsoft", salary: "$200-$900", remote: true },
      { title: "Principal Product Manager- Copilot", company: "Microsoft.", salary: "$100-$300", remote: true },
      { title: "Data Center Logistics Technician", company: "Microsoft", salary: "$200-$900", remote: true },
      { title: "Security Operations Engineering IC4", company: "Microsoft", salary: "$200-$900", remote: true }
    ]
  };

  return (

    <div >
      <Navbar/>


    <div className="app">
      <Jobpage jobData={jobData} />
    </div>
    <Footer/>
    </div>
  );
}

export default App;