
import React from 'react';
import Tabs from './components/Tabs/Tabs';
import Gallery from './components/Gallery/Gallery';
import './App.css';
function App() {
  return (
    <div className="app">
      <div className="left-empty"></div>
      <div className="right-widgets">
        <Tabs />
        <div><hr className="divider" /></div>
        <Gallery />
        <div><hr className="divider" /></div>
      </div>
    </div>
  );
}

export default App;