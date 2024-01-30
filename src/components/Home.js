// Home.js

import React from 'react';
import './Home.css'; // Import your CSS file for styling
import HomeIcon from '../images/home/home.png';

function Home() {
  return ( 
    <div className="home-container">
      <div className="column-left">
        <div className="centered">
        <h1 className="your-h1-class">WELCOME TO BRANDLET</h1>
        <p className="custom-paragraph">We are a creative group
            of people who design
            influential brands and
            digital experiences.</p>
            <button className="custom-button">Explore</button>
        </div>
      </div>
      <div className="column-right">
        <img src={HomeIcon} alt="Home" />
      </div>
    </div>
  );
}

export default Home;
