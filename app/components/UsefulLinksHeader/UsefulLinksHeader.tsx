import React from 'react';
import './UsefulLinksHeader.css';

const UsefulLinksHeader = () => {
  return (
    <div id="useful-links" className="useful-links-header-container">
      <h1 className="useful-links-header-title">Useful Links</h1>
      <div className="useful-links-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="useful-link">
          <img src="/breakhaus/assets/instagram-logo.png" alt="Instagram" className="useful-link-icon" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="useful-link">
          <img src="/breakhaus/assets/youtube-logo.png" alt="YouTube" className="useful-link-icon" />
        </a>
        <a href="https://www.residentadvisor.net" target="_blank" rel="noopener noreferrer" className="useful-link">
          <img src="/breakhaus/assets/resident-advisor-logo.png" alt="Resident Advisor" className="useful-link-icon" />
        </a>
      </div>
    </div>
  );
};

export default UsefulLinksHeader;
