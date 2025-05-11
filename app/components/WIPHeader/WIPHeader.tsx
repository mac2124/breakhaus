import React from 'react';
import './WIPHeader.css';


const WIPHeader = () => {
    return (
        <div className="wip-header-container">
          {/* Header Text */}
          <h1 className="wip-header-title">Work in Progress</h1>
    
          {/* Links Section */}
          <div className="wip-header-links">
            <a href="#about-us" className="wip-link">About Us</a>
            <span className="wip-divider"></span>
            <a href="#useful-links" className="wip-link">Useful Links</a>
            <span className="wip-divider"></span>
            <a href="#contact" className="wip-link">Contact</a>
          </div>
          <div className="absolute bottom-10 left-0 w-full flex items-center justify-center z-10">
            <div className="double-arrow animate-fade-in">
                <div className="arrow"></div>
                <div className="arrow mt-2"></div>
            </div>     
          </div>
        </div>
      );
};

export default WIPHeader;