import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="techtrack-container">
      <header className="techtrack-header">
        <h1>Welcome to TechTrack</h1>
        <p>Your partner in innovative web and app development solutions.</p>
      </header>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Transform your ideas into reality with our cutting-edge web development services. From responsive websites to full-featured web applications, we create digital solutions that drive results.</p>
          </div>
          <div className="service-card">
            <h3>App Development</h3>
            <p>Engage users with intuitive and dynamic mobile apps. Our expertise in both iOS and Android platforms ensures your app stands out in the crowded marketplace.</p>
          </div>
          <div className="service-card">
            <h3>.NET Core Development</h3>
            <p>Leverage the power of .NET Core for high-performance, cross-platform applications. We specialize in building scalable and secure solutions that meet your business needs.</p>
          </div>
          <div className="service-card">
            <h3>Laravel Development</h3>
            <p>Build robust and elegant web applications with Laravel. Our Laravel experts ensure your projects are completed efficiently with clean, maintainable code.</p>
          </div>
          <div className="service-card">
            <h3>React.js Development</h3>
            <p>Enhance user experiences with React.js. We create interactive and dynamic web applications that offer smooth performance and a high degree of scalability.</p>
          </div>
          <div className="service-card">
            <h3>React Native Development</h3>
            <p>Develop native mobile applications with React Native. Our approach ensures that you get high-quality apps that work seamlessly on both iOS and Android devices.</p>
          </div>
          <div className="service-card">
            <h3>MERN Stack Development</h3>
            <p>Harness the power of MongoDB, Express.js, React.js, and Node.js. We provide end-to-end solutions for building modern and efficient web applications.</p>
          </div>
          <div className="service-card">
            <h3>Other Services</h3>
            <p>From custom software solutions to digital marketing, TechTrack offers a range of services to meet your business needs. Contact us to learn more about how we can help you achieve your goals.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
