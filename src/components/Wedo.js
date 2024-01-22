// wedo.jsx
import React from 'react';
import './Wedo.css'; // Import your CSS file for styling
import DigitalMarketingIcon from '../images/wedo/c1.png';
import AdvertiseIcon from '../images/wedo/c2.png';
import BrandingIcon from '../images/wedo/c3.png';
import WebsiteIcon from '../images/wedo/c4.png';
import PackageIcon from '../images/wedo/c5.png';
import PrintIcon from '../images/wedo/c6.png';
import VisualIcon from '../images/wedo/c7.png';
import ProposalIcon from '../images/wedo/c8.png';
import DigitalIcon from '../images/wedo/c9.png';
import ContentIcon from '../images/wedo/c10.png';

function wedo() {
  return (
    <div>
      <div className="container-wedo">
        <h1 className="title">WHAT WE DO</h1>
        <h3 className="subtitle">We’ve got everything you need to <br /> launch and grow your business</h3>
          <div className="row">
            {/* Card 1 */}
            <div className="column-wedo1">
              <div className="card1">
              <h3><img src={DigitalMarketingIcon} alt="Digital Marketing Icon" />
                  &nbsp;&nbsp;DIGITAL MARKETING
              </h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="column-wedo2">
              <div className="card2">
                <h3><img src={AdvertiseIcon} alt="Advertise Icon" />&nbsp;&nbsp;ADVERTISE</h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>
          </div>

          {/* Add another row for the next two cards */}
          <div className="row">
            {/* Card 3 */}
            <div className="column-wedo3">
              <div className="card3">
                <h3><img src={BrandingIcon} alt="Branding Icon" />&nbsp;&nbsp;BRANDING</h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="column-wedo4">
              <div className="card4">
                <h3><img src={WebsiteIcon} alt="Website Icon" />&nbsp;&nbsp;WEBSITES, E-COMMERCE & APPS</h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Card 5 */}
            <div className="column-wedo5">
              <div className="card5">
                <h3><img src={PackageIcon} alt="Package Icon" />&nbsp;&nbsp;PACKAGE DESIGN</h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="column-wedo6">
              <div className="card6">
                <h3><img src={PrintIcon} alt="Print Icon" />&nbsp;&nbsp;PRINT DESIGN</h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Card 7 */}
            <div className="column-wedo7">
              <div className="card7">
                <h3><img src={VisualIcon} alt="Visual Icon" />&nbsp;&nbsp;VISUAL STRATEGIES</h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="column-wedo8">
              <div className="card8">
                <h3><img src={ProposalIcon} alt="Proposal Icon" />&nbsp;&nbsp;PROPOSAL & DESIGNING</h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Card 9 */}
            <div className="column-wedo9">
              <div className="card9">
                <h3><img src={DigitalIcon} alt="Digital Icon" />&nbsp;&nbsp;DIGITAL RESPONSE MANAGEMENT</h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>

            {/* Card 10 */}
            <div className="column-wedo10">
              <div className="card10">
                <h3><img src={ContentIcon} alt="Content Icon" />&nbsp;&nbsp;CONTENT</h3>
                <p>Nemo cupiditate ab quibusdam quaerat impedit
Earum suscipit ipsum laudantium. Quo delectus est.
Maiores voluptas ab sit natus veritatis ut. Debitis
nullacumque veritatis. Sunt suscipit voluptas
ipsa in tempora esse soluta sint.</p>
              </div>
            </div>
          </div>
        {/* Repeat the same structure for the next rows of cards */}
        {/* Add more rows as needed */}

      </div>
    </div>
  );
}

export default wedo;
