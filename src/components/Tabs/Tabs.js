import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <div className="icons-container">
          <div className="icon info-icon">?</div>
          <div className="icon grid-icon">▦</div>
        </div>
        <div className="tabs">
        <div>
          <button
            className={`tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}>
            About Me
          </button>
          <button
            className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
            onClick={() => setActiveTab('experiences')}>
            Experiences
          </button>
          <button
            className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
            onClick={() => setActiveTab('recommended')}>
            Recommended
          </button>
          </div>
        </div>
        
        <div className="right-line"></div>
      </div>
      
      <div className="tab-content">
        {activeTab === 'about' && (
          <div>
            <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...</p>
          </div>
        )}
        {activeTab === 'experiences' && <p>Experiences ...</p>}
        {activeTab === 'recommended' && <p>Recommended ...</p>}
      </div>
      
    </div>
    
  );
  
};

export default Tabs;
