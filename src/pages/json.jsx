import React, { useState, useEffect } from 'react';

const About = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3030/restaurants')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      })
      .then(data => {
        setRestaurants(data); // Set the restaurants state
        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      {restaurants.map((restaurant, index) => (
        <div key={index} style={{display:'flex',gap:'2rem'}}>
        <span >{restaurant.name}</span>
        <span >{restaurant.description}</span>
        <button>detail</button>
        </div>
      ))}
    </div>
  );
};

export default About;
