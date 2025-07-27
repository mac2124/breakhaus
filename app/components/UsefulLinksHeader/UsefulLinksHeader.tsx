import React from 'react';
import './UsefulLinksHeader.css';

const UsefulLinksHeader = () => {
  return (
    <div id="useful-links" className="useful-links-header-container">
      <h1 className="useful-links-header-title">Useful Links</h1>
      <div className="useful-links-icons">
        <a href="https://www.instagram.com/_breakhaus?igsh=MWFjMzVmajY1Nmg2" target="_blank" rel="noopener noreferrer" className="useful-link">
          <img src="/breakhaus/assets/instagram-icon.svg" alt="Instagram" className="useful-link-icon" />
        </a>
        <a href="https://youtube.com/@breakhausfm?si=xbjCIt7RsCckNuj3" target="_blank" rel="noopener noreferrer" className="useful-link">
          <img src="/breakhaus/assets/youtube-icon.svg" alt="YouTube" className="useful-link-icon" />
        </a>
        <a href="https://ra.co/promoters/146667" target="_blank" rel="noopener noreferrer" className="useful-link">
          <img src="/breakhaus/assets/resident-advisor-logo.svg" alt="Resident Advisor" className="useful-link-icon" />
        </a>
      </div>
      {/* Double Arrow */}
      <div className="double-arrow animate-fade-in">
        <div className="arrow"></div>
        <div className="arrow mt-2"></div>
      </div>
    </div>
  );
};

export default UsefulLinksHeader;
