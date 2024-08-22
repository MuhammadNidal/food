import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Set up the interval for auto-sliding
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 2 seconds

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency array includes currentIndex to reset interval on slide change

  return (
    <div className="image-slider">
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
