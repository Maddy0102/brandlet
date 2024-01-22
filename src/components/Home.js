import React, { useState, useEffect } from 'react';
import './Home.css'; // CSS File
import exploreImage from '../images/explore.jpg';
import symbol7Image from '../images/Symble7.jpg';
import whitecard from '../images/whitecard.avif'
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const showSlides = () => {
      let slides = document.querySelectorAll(".mySlides");
      let dots = document.querySelectorAll(".dot");

      if (slides.length === 0 || dots.length === 0) {
        // Elements not found, handle error or return
        return;
      }

      if (currentSlide > slides.length) setCurrentSlide(1);
      if (currentSlide < 1) setCurrentSlide(slides.length);

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[currentSlide - 1].style.display = "block";
      dots[currentSlide - 1].className += " active";
    };

    showSlides();
  }, [currentSlide]);

  const plusSlides = (n) => {
    setCurrentSlide((prev) => prev + n);
  };

  const currentSlideHandler = (n) => {
    setCurrentSlide(n);
  };

  return (
    <div className="slideshow-container">
      {/* Full-width images with number and caption text */}
      <div className="mySlides fade">
        <img src={exploreImage} alt="Explore" style={{ width: '100%' }} />
        {/* Button and text inside the image */}
          <div className="image-overlay">
            <h1 className="overlay-text-h1">Welcome To Brandlet</h1>
              <button className="overlay-button" onClick={() => console.log('Button Clicked')}>
                Explore
              </button>
          </div>
      </div>

      <div className="mySlides fade">
        <img src={whitecard} alt="whitecard" style={{ width: '100%' }} />
          <div className="image-overlay">
            <p className="overlay-text-p">We are a creative group of people who design influential brands and digital experiences</p>
          </div>
      </div>

      <div className="mySlides fade">
        <img src={symbol7Image} alt="Symbol 7" style={{ width: '100%' }} />
      </div>

      {/* Next and previous buttons */}
      <button className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </button>

      {/* The dots/circles */}
      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlideHandler(1)}></span>
        <span className="dot" onClick={() => currentSlideHandler(2)}></span>
        <span className="dot" onClick={() => currentSlideHandler(3)}></span>
      </div>
    </div>
  );
};

export default Home;
