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
        <h1 className="subtitle">We’ve got everything you need to <br /> launch and grow your business</h1>
          <div className="row">
            {/* Card 1 */}
            <div className="column-wedo1">
              <div className="card1">
                <div className="card-header-1">
                  <img src={DigitalMarketingIcon} alt="Digital Marketing Icon" />
                </div>
                <div className="card-content-1">
                  <h3>DIGITAL MARKETING</h3>
                  <p>
                    Nemo cupiditate ab quibusdam quaerat impedit Earum suscipit ipsum laudantium. 
                    Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nullacumque veritatis.
                    Sunt suscipit voluptasipsa in tempora esse soluta sint.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="column-wedo2">
              <div className="card2">
                <div className="card-header-2">
                  <img src={AdvertiseIcon} alt="Advertise Icon" />
                </div>
                <div className="card-content-2">
                  <h3>ADVERTISE</h3>
                  <p>Nemo cupiditate ab quibusdam quaerat impedit
                    Earum suscipit ipsum laudantium. Quo delectus est.
                    Maiores voluptas ab sit natus veritatis ut. Debitis
                    nullacumque veritatis. Sunt suscipit voluptas
                    ipsa in tempora esse soluta sint.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add another row for the next two cards */}
          <div className="row">
            {/* Card 3 */}
            <div className="column-wedo3">
              <div className="card3">
                <div className="card-header-3">
                  <img src={BrandingIcon} alt="Branding Icon" />
                </div>
                <div className="card-content-3">
                  <h3>BRANDING</h3>
                  <p>Nemo cupiditate ab quibusdam quaerat impedit
                      Earum suscipit ipsum laudantium. Quo delectus est.
                      Maiores voluptas ab sit natus veritatis ut. Debitis
                      nullacumque veritatis. Sunt suscipit voluptas
                    ipsa in tempora esse soluta sint.
                  </p>
                </div>  
              </div>
            </div>

            {/* Card 4 */}
            <div className="column-wedo4">
              <div className="card4">
                <div className="card-header-4">
                  <img src={WebsiteIcon} alt="Website Icon" />
                </div>
                <div className="card-content-4">
                  <h3>WEBSITES, E-COMMERCE & APPS</h3>
                  <p>Nemo cupiditate ab quibusdam quaerat impedit
                      Earum suscipit ipsum laudantium. Quo delectus est.
                      Maiores voluptas ab sit natus veritatis ut. Debitis
                      nullacumque veritatis. Sunt suscipit voluptas
                      ipsa in tempora esse soluta sint.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Card 5 */}
            <div className="column-wedo5">
              <div className="card5">
                <div className="card-header-5">
                  <img src={PackageIcon} alt="Package Icon" />
                </div>
                <div className="card-content-5">
                  <h3>PACKAGE DESIGN</h3>
                  <p>Nemo cupiditate ab quibusdam quaerat impedit
                    Earum suscipit ipsum laudantium. Quo delectus est.
                    Maiores voluptas ab sit natus veritatis ut. Debitis
                    nullacumque veritatis. Sunt suscipit voluptas
                    ipsa in tempora esse soluta sint.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="column-wedo6">
              <div className="card6">
                <div className="card-header-6">
                  <img src={PrintIcon} alt="Print Icon" />
                </div>
                <div className="card-content-6">
                  <h3>PRINT DESIGN</h3>
                  <p>Nemo cupiditate ab quibusdam quaerat impedit
                    Earum suscipit ipsum laudantium. Quo delectus est.
                    Maiores voluptas ab sit natus veritatis ut. Debitis
                    nullacumque veritatis. Sunt suscipit voluptas
                    ipsa in tempora esse soluta sint.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Card 7 */}
            <div className="column-wedo7">
              <div className="card7">
                <div className="card-header-7">
                  <img src={VisualIcon} alt="Visual Icon" />
                </div>
                <div className="card-content-7">
                  <h3>VISUAL STRATEGIES</h3>
                  <p>Nemo cupiditate ab quibusdam quaerat impedit
                      Earum suscipit ipsum laudantium. Quo delectus est.
                      Maiores voluptas ab sit natus veritatis ut. Debitis
                      nullacumque veritatis. Sunt suscipit voluptas
                      ipsa in tempora esse soluta sint.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="column-wedo8">
              <div className="card8">
                <div className="card-header-8">
                  <img src={ProposalIcon} alt="Proposal Icon" />
                </div>
                <div className="card-content-8">
                  <h3>PROPOSAL & DESIGNING</h3>
                  <p>Nemo cupiditate ab quibusdam quaerat impedit
                    Earum suscipit ipsum laudantium. Quo delectus est.
                    Maiores voluptas ab sit natus veritatis ut. Debitis
                    nullacumque veritatis. Sunt suscipit voluptas
                    ipsa in tempora esse soluta sint.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Card 9 */}
            <div className="column-wedo9">
              <div className="card9">
                <div className="card-header-9">
                  <img src={DigitalIcon} alt="Digital Icon" />
                </div>
                <div className="card-content-9">
                  <h3>DIGITAL RESPONSE MANAGEMENT</h3>
                  <p>Nemo cupiditate ab quibusdam quaerat impedit
                    Earum suscipit ipsum laudantium. Quo delectus est.
                    Maiores voluptas ab sit natus veritatis ut. Debitis
                    nullacumque veritatis. Sunt suscipit voluptas
                    ipsa in tempora esse soluta sint.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 10 */}
            <div className="column-wedo10">
              <div className="card10">
                <div className="card-header-10">
                  <img src={ContentIcon} alt="Content Icon" />
                </div>
                <div className="card-content-10"></div>
                  <h3>CONTENT</h3>
                  <p>Nemo cupiditate ab quibusdam quaerat impedit
                    Earum suscipit ipsum laudantium. Quo delectus est.
                    Maiores voluptas ab sit natus veritatis ut. Debitis
                    nullacumque veritatis. Sunt suscipit voluptas
                    ipsa in tempora esse soluta sint.
                  </p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default wedo;