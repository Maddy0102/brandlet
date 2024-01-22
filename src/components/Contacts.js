// Contacts.jsx
import React from 'react';
import './Contacts.css'; // Import your CSS file for styling
import Copyright from './Copyrights';
import SocialMedia1 from '../images/contact/Vector.png';
import SocialMedia2 from '../images/contact/Vector (1).png';
import SocialMedia3 from '../images/contact/Vector (2).png';
import SocialMedia4 from '../images/contact/Vector (3).png';
import SocialMedia5 from '../images/contact/Vector (4).png';
function Contacts() {
  return ( 
    <div>
      <div className="container">
        <h1 className="title">Contact Us</h1>
        <h3 className="subtitle">Reach out for a new project or <br /> just say hello</h3>
        <div className="row">
          <div className="column">
            <div className="card-1">
              <h3>Where to Find Us</h3>
              <p>1600 Amphitheatre Parkway<br></br>
                    Mountain View,<br></br>
                    Chennai - 600 001.</p>
            </div>
          </div>

          <div className="column">
            <div className="card-2">
              <h3>Email Us At</h3>
              <p>contact@brandlet.com</p>
              <p>info@brandlet.com</p>
            </div>
          </div>

          <div className="column">
            <div className="card-3">
              <h3>Call Us At</h3>
              <p>Phone: (+63) 555 1212</p>
              <p>Mobile: (+63) 555 0100</p>
            </div>
          </div>

          <div className="column">
            <div className="card-4">
              <img src={SocialMedia1} alt="Socila Media 1" />
              <img src={SocialMedia2} alt="Socila Media 2" />
              <img src={SocialMedia3} alt="Socila Media 3" />
              <img src={SocialMedia4} alt="Socila Media 4" />
              <img src={SocialMedia5} alt="Socila Media 5" />
            </div>
          </div>
        </div>
      </div>

      {/* New div container below the existing content */}
      <Copyright />
    </div>
  );
}

export default Contacts;
