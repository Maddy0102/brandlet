import React from 'react';
import './Clients.css'; // Import your CSS file for styling
import Client1Icon from '../images/clients/cl1.png';
import Client2Icon from '../images/clients/cl2.png';
import Client3Icon from '../images/clients/cl3.png';
import Client4Icon from '../images/clients/cl4.png';
import Client5Icon from '../images/clients/cl5.png';
import Client6Icon from '../images/clients/cl6.png';
import Client7Icon from '../images/clients/clcenter.jpg';

function Clients() {
  return ( 
    <div className="main-container-cl">
      <div className="header-cl">
        <h1>OUR CLIENTS</h1>
      </div>
      <div className="sub-header-cl">
        <h2>Brandlet has been honored to partner</h2>
        <h2>up with these clients</h2>
      </div>
      <div className="img-container">
        <img src={Client1Icon} alt="Client1 Icon" />
        <img src={Client2Icon} alt="Client2 Icon" />
        <img src={Client3Icon} alt="Client3 Icon" />
        <img src={Client4Icon} alt="Client4 Icon" />
        <img src={Client5Icon} alt="Client5 Icon" />
        <img src={Client6Icon} alt="Client6 Icon" />
      </div>
      <div className="main-img">
        <img src={Client7Icon} alt="Client7 Icon" />
      </div>
    </div>
  );
}

export default Clients;
