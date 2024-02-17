import React from 'react';
import logoImage from '../../src/img/MenuLogo.png';
import { Link } from 'react-scroll';

const MenuBar = ({ activeSection }) => {
  return (
    <div className={`menu ${activeSection ? 'active' : ''}`}>
        <div className="logo">
          <img src={logoImage} alt="Home" className="" />
        </div>
      <nav>
        <ul>
          {/* <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">Home</a></li> */}
          <li className={activeSection === 'resume' ? 'active' : ''}><Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >
            <a href="#resume">Resume</a>
            </Link>
            </li>
          <li className={activeSection === 'tools' ? 'active' : ''}>
          <Link
            activeClass="active"
            to="tools"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >
            <a href="#tools">Tools</a>
            </Link>
            </li>
          {/* <li className={activeSection === 'job-tracker' ? 'active' : ''}><a href="#job-tracker">Job Tracker</a></li> */}
          <li className={activeSection === 'interview-prep' ? 'active' : ''}><a href="#interview-prep">Prep</a></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default MenuBar;
