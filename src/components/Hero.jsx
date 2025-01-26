import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          <span className="text-success">discover</span> your dream home
        </h1>
        <p className="hero-subtitle">with thousands of new properties every day</p>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="d-flex gap-3">
              <button 
                className="btn btn-primary flex-grow-1 py-3"
                onClick={() => navigate('/for-sale')}
              >
                For Sale
              </button>
              <button 
                className="btn btn-primary flex-grow-1 py-3"
                onClick={() => navigate('/to-rent')}
              >
                To Rent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;