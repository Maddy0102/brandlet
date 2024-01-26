import React, { useState, useEffect } from 'react';
import './Home.css'; // CSS File
import exploreImage from '../images/explore.jpg';
import symbol7Image from '../images/Symble7.jpg';
import whitecard from '../images/whitecard.avif'
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const showSlides = () => {

    };

    showSlides();
  }, [currentSlide]);

  const plusSlides = (n) => {
    setCurrentSlide((prev) => {
      return prev + n >= 0 ? (prev + n)%(slides.length) : slides.length - 1
    });
  };

  const currentSlideHandler = (n) => {
    setCurrentSlide(n);
  };

  const [slides, setSlides] = useState([
    { id: 0, title: "Welcome To Brandlet", image: exploreImage },
    { id: 1, title: "We are a creative group of people who design influential brands and digital experiences", image: whitecard },
    { id: 2, image: symbol7Image },
  ])  

  return (
    <div className="slideshow-container">
      {/* Full-width images with number and caption text */}
      <div className="mySlides fade" style={{ position: 'relative' }}>
        <img src={slides[currentSlide].image} style={{ width: '100%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{slides[currentSlide].title}</div>
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
        {slides.map((slide) => (<span key={slide.id} className="dot" onClick={() => currentSlideHandler(slide.id)}></span>))}
      </div>
    </div>
  );
};

export default Home;