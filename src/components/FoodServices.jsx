import React, { useState, useEffect } from 'react';
import './FoodServices.css';

import Sheriz from '../images/Sheriz.jpg';
import hotelImageB from '../images/hotel3.jpeg';
import hotelImageC from '../images/hotel8.jpg';
import hotelImageD from '../images/hotel5.jpeg';
import hotelImageE from '../images/hotel6.png';
import hotelImageF from '../images/hotel7.jpg';
import hotelImageG from '../images/jalil.png';
import hotelImageH from '../images/traskon.jpeg';
import HotelCard from './HotelCard';

const FoodService = () => {
  const hotels = [
    { id: 1, name: 'Sheriz', image: Sheriz, description: 'Sheriz offers a luxurious dining experience with a menu full of gourmet dishes, served in an elegant ambiance.' },
    { id: 2, name: 'Cheezious', image: hotelImageB, description: 'Cheezious is renowned for its cheesy delights, offering a variety of pizzas, burgers, and more in a cozy setting.' },
    { id: 3, name: 'Serinea', image: hotelImageC, description: 'Serinea provides a serene atmosphere with a diverse menu featuring both local and international cuisine, perfect for fine dining.' },
    { id: 4, name: 'Hugra', image: hotelImageD, description: 'Hugra specializes in traditional dishes, offering a rich taste of heritage in a warm and welcoming environment.' },
    { id: 5, name: 'Charsa', image: hotelImageE, description: 'Nasar Charsa is famous for its flavorful barbeque and authentic local dishes, providing a true taste of the region.' },
    { id: 6, name: 'Mecdonalas', image: hotelImageF, description: 'Mecdonalas is a popular fast-food chain, offering a wide range of burgers, fries, and shakes for a quick and satisfying meal.' },
    { id: 7, name: 'Jalil Kabib', image: hotelImageG, description: 'Jalil Kabib is known for its mouthwatering kebabs and grilled specialties, serving authentic flavors in every bite.' },
    { id: 8, name: 'Traskon', image: hotelImageH, description: 'Traskon provides a modern dining experience with a menu that blends traditional and contemporary dishes in a stylish setting.' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change the slide every 2 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 2000); // 2000 ms = 2 seconds

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [currentSlide]); // Adding currentSlide as a dependency ensures that the interval is set correctly

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % hotels.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? hotels.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="food-service">
      <div className="slider">
        <div className="slider-wrapper">
          {hotels.map((hotel, index) => (
            <div
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              key={hotel.id}
            >
              <img src={hotel.image} alt={hotel.name} />
              <div className="slide-content">
                <h3>{hotel.name}</h3>
                <p>{hotel.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>

      <h2>Food Services - Hotels</h2>
      <div className="hotel-cards">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default FoodService;

// import hotelImageG from '../images/hotel6.png';
// import hotelImagek from '../images/traskon.jpeg';
// import hotelImageL from '../images/jalil.png';
// import hotelImageM from '../images/hotel8.jpg';

 // { id: 9, name: 'Hotel I', image: hotelImageG, description: 'Description for Hotel I' },
    // { id: 10, name: 'Hotel K', image: hotelImagek, description: 'Description for Hotel K' },
    // { id: 11, name: 'Hotel L', image: hotelImageL, description: 'Description for Hotel L' },
    // { id: 12, name: 'Hotel M', image: hotelImageM, description: 'Description for Hotel M' },