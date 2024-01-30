import React, { useState, useEffect } from 'react';
import './Home1.css'; // CSS File
import exploreImage from '../images/explore.jpg';
import symbol7Image from '../images/Symble7.jpg';
import whitecard from '../images/whitecard.avif';

const Home1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Start automatic slide transition
    const id = setInterval(() => {
      plusSlides(1);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    setIntervalId(id);

    // Clean up interval when component is unmounted
    return () => clearInterval(id);
  }, []);

  const plusSlides = (n) => {
    setCurrentSlide((prev) => {
      const newSlide = prev + n >= 0 ? (prev + n) % slides.length : slides.length - 1;
      return newSlide;
    });
  };

  const currentSlideHandler = (n) => {
    clearInterval(intervalId); // Clear the automatic interval when manually changing slide
    setCurrentSlide(n);
  };

  const restartAutoSlide = () => {
    clearInterval(intervalId);
    const id = setInterval(() => {
      plusSlides(1);
    }, 10000); // Change slide every 3 seconds (adjust as needed)
    setIntervalId(id);
  };

  const [slides, setSlides] = useState([
    { id: 0, title: "Welcome To Brandlet", image: exploreImage },
    { id: 1, title: "We are a creative group of people who design influential brands and digital experiences", image: whitecard },
    { id: 2, image: symbol7Image },
  ]);

  return (
    <div className="slideshow-container">
      {/* Full-width images with number and caption text */}
      <div className="mySlides fade" style={{ position: 'relative' }}>
        <img src={slides[currentSlide].image} style={{ width: '100%' }} alt={`Slide ${currentSlide}`} />
        {slides[currentSlide].id === 0 && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h2 className="slide-title">{slides[currentSlide].title}</h2>
          </div>
        )}
        {slides[currentSlide].id === 0 && (
          <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <button className="slide-button" onClick={restartAutoSlide}>
              Explore
            </button>
          </div>
        )}
        {slides[currentSlide].id === 1 && (
          <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            {slides[currentSlide].title}
          </p>
        )}
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
        {slides.map((slide) => (
          <span key={slide.id} className="dot" onClick={() => currentSlideHandler(slide.id)}></span>
        ))}
      </div>
    </div>
  );
};

export default Home1;
