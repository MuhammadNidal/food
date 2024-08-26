import React, { useState, useEffect } from 'react';
import './FoodServices.css';

import Sheriz from '../../images/shiraz.jpeg';
import hotelImageB from '../../images/cheezi.jpg';
import hotelImageC from '../../images/hotel8.jpg';
// import hotelImageD from '../images/hotel5.jpeg';
import hotelImageE from '../../images/hotel6.png';
import hotelImageF from '../../images/mc1.png';
import hotelImageG from '../../images/jalal.jpeg';
import hotelImageH from '../../images/tars1.jpeg';
import HotelCard from '../HotelsCard/HotelCard';
import SearchInput from '../Search/Search';

const FoodService = () => {
  const hotels = [
    { id: 1, name: 'Shiraz', image: Sheriz, description: 'Sheriz offers a luxurious dining experience ,'},
    { id: 2, name: 'Cheezious', image: hotelImageB, description: 'Cheezious is renowned for its cheesy delights,' },
    { id: 3, name: 'Serinea', image: hotelImageC, description: 'Serinea provides a serene atmosphere ' },
    // { id: 4, name: 'Hugra', image: hotelImageD, description: 'Hugra specializes in traditional dishes,.' },
    { id: 5, name: 'Charsa', image: hotelImageE, description: 'Nasar Charsa is famous for its flavorful barbeque.' },
    { id: 6, name: 'Mecdonalas', image: hotelImageF, description: 'Mecdonalas is a popular fast-food chain.' },
    { id: 7, name: 'Jalil Kabib', image: hotelImageG, description: 'Jalil Kabib is known for its mouthwatering .' },
    { id: 8, name: 'Traskon', image: hotelImageH, description: 'Traskon provides a modern dining experience with a menu ' },
  ];



  return (
    <div className="food-service">


      <div className="search">
        <SearchInput/>
      </div>

      <h2 style={{color:"black"}}>Resturants Board</h2>
      <div className="hotel-cards">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default FoodService;

