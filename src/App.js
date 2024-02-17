import React, { useState, useEffect } from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
import Section from './components/Section';
import HomeSection from './components/HomeSection';
import ResumeSection from './components/ResumeSection';
import ToolSection from './components/ToolSection';
import PrepSection from './components/PrepSection';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Col } from 'antd';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'resume', 'tools', 'job-tracker', 'interview-prep'];

      // Find the section currently in view based on its offset from the top
      const newActiveSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      // Update the active section state
      if (newActiveSection && newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    // Listen for scroll events and update the active section
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="App">
      <header className="App-header">
        <MenuBar activeSection={activeSection} />
      </header>
      <main className="body-style">
        <Col>
          <Section id="home" title="Home Section">
            <HomeSection />
          </Section>
          <Section id="resume" title="Resume Section">
          <ResumeSection />
            </Section>
          <Section id="tools" title="Tools Section">
            <ToolSection />
          </Section>
          {/* <Section id="job-tracker" title="Job Tracker Section"> */}
            {/* Add your job tracker section content here */}
          {/* </Section> */}
          <Section id="interview-prep" title="Interview Preparation Section">
            <PrepSection />
            {/* Add your interview prep section content here */}
          </Section>
        </Col>
      </main>
    </div>
  );
}

export default App;
