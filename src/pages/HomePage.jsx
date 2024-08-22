import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
// import appoinment from '../images/hos.jpg';
import food from '../images/foodservice.jpg';
// import school from '../images/school.jpg';
// import service from '../images/itservice.jpg';
// import market from '../images/mar.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
    <div className="overlay">
      <h2>Welcome to the Food Service Application</h2>
      <p>Explore our services by navigating through the menu.</p>
    </div>
  
    <div className="centered-card-container">
      <div className="card" onClick={() => navigate('/services/food')} style={{ cursor: 'pointer' }}>
        <img src={food} alt="Food Services" className="card-image" />
        <div className="card-content">
          <h3>Food Services</h3>
          <p>Explore a variety of food options and services.</p>
        </div>
      </div>
    </div>
  </div>
  


  );
};

export default HomePage;
   {/* <div className="card" onClick={() => navigate('/services/it')} style={{ cursor: 'pointer' }}>
          <img src={service} alt="Services" className="card-image" />
          <div className="card-content">
            <h3>Services</h3>
            <p>Access a range of services available at your fingertips.</p>
          </div>
        </div>
        <div className="card" onClick={() => navigate('/services/hospital')} style={{ cursor: 'pointer' }}>
          <img src={appoinment} alt="Hospital Appointments" className="card-image" />
          <div className="card-content">
            <h3>Hospital Appointments</h3>
            <p>Schedule and manage your hospital appointments with ease.</p>
          </div>
        </div> */}  {/* <div className="card" onClick={() => navigate('/services/admission')} style={{ cursor: 'pointer' }}>
          <img src={school} alt="Admission" className="card-image" />
          <div className="card-content">
            <h3>Admission</h3>
            <p>Manage and streamline your admission processes.</p>
          </div>
        </div> */}