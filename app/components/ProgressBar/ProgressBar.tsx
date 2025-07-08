import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
    </div>
  );
};

export default ProgressBar;