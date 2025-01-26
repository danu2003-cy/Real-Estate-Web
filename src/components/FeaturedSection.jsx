import React from 'react';
import { Link } from 'react-router-dom';
import sold from '../assets/download.jpeg'
import commercial from '../assets/commercial-property.jpg'
import energy from '../assets/Energy.jpg'

const FeaturedSection = () => {
  return (
    <div className="featured-section">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <img src={sold} className="card-img-top" alt="Sold house prices" />
            <div className="card-body">
              <h5 className="card-title">Sold house prices</h5>
              <p className="card-text">Check what a home sold for plus photos, floorplans and local area insights.</p>
              <Link to="/house-prices" className="btn btn-outline-primary">Search house prices</Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100">
            <img src={commercial} className="card-img-top" alt="Commercial property" />
            <div className="card-body">
              <h5 className="card-title">Commercial property</h5>
              <p className="card-text">Search freehold and leasehold commercial properties in the UK.</p>
              <Link to="https://ikman.lk/en/ads/galle/commercial-properties-for-sale" className="btn btn-outline-primary">Search now</Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100">
            <img src={energy} className="card-img-top" alt="Energy efficiency" />
            <div className="card-body">
              <h5 className="card-title">Energy efficiency</h5>
              <p className="card-text">Learn about going greener at home, and tips for reducing your energy bill.</p>
              <Link to="https://www.repsol.com/en/sustainability/sustainability-pillars/climate-change/energy-efficiency/what-is-energy-efficiency/index.cshtml" className="btn btn-outline-primary">Find out more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;