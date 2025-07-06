import React from 'react';
import './AboutUsHeader.css';

const AboutUsHeader = () => {
  return (
    <div className="about-us-header-container">
      {/* Header Text */}
      <h1 className="about-us-header-title">About Us</h1>

      {/* Paragraph Section */}
      <p className="about-us-paragraph">
        Breakhaus as a cultural movement centralised around face to face bass music 
        BH is about community and beautiful familiar faces which collectively assemble in a comfortable and exciting environment 
        Music becomes more interpersonal as the decks are face to face; djs bounce off each other which promotes a thrilling and lively atmosphere
        It feels like you are witnessing the music being made, a part of the intimate process between both djs who are hitting crazy tunes 
        It also feels like like witnessing a friendly battle; which makes BH more climactic to regular club nights 

        Additionally the fact that there isn’t a divide between the dj's and crowd (like they are not on a podium or elevated or so) makes the experience a lot more personal
        But mainly for me what makes BH so special is the community built around it, anticipating the day and the excitement of knowing everyone is coming out that night. Music becomes a social process of brining people together, dancing, meeting new and familiar faces.
      </p>

      {/* Double Arrow */}
      <div className="double-arrow animate-fade-in">
        <div className="arrow"></div>
        <div className="arrow mt-2"></div>
      </div>
    </div>
  );
};

export default AboutUsHeader;