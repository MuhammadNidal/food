// src/components/HotelCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
// import './HotelCard.css';

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Food/Services/${hotel.id}`);
  };

  return (
    <div className="hotel-card">
      <div className="hotel-card-image" style={{ backgroundImage: `url(${hotel.image})`,  }}></div>
      <div className="hotel-card-content">
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <p>{hotel.price}</p>
        <Button variant="contained" color="primary" onClick={handleClick}>
          View Details
        </Button>
      </div>
    </div>
  );
};

export default HotelCard;
