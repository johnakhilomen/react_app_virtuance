import React from 'react';
import logo from './logo.svg';
import { Images } from './features/images/Images';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} />
        </div>
      </div>
      <div className="main">
        <Images />
      </div>
    </div>
    </div>
  );
}

export default App;
