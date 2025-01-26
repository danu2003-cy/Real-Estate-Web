import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Hero />
      <div className="container-fluid px-4 py-4 flex-grow-1">
        <FeaturedSection />
      </div>
    </div>
  );
};

export default Home;