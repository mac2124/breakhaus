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

          {/* Merch Section */}
          <div className="merch-section">
            <h2 className="merch-header">Merch now available</h2>
            <a href="#shop" className="shop-link">Shop</a>
          </div>
          
            <div className="double-arrow animate-fade-in">
                <div className="arrow"></div>
                <div className="arrow mt-2"></div>
            </div>     
        </div>
      );
};

export default WIPHeader;