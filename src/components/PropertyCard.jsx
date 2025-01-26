import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/propertyUtils';
import FavoriteButton from './FavoriteButton';

const PropertyCard = ({ property }) => {
  const { id, title, price, type, bedrooms, location, mainImage } = property;

  return (
    <div className="property-card card mb-4">
      <img src={mainImage} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {formatPrice(price)}
          {type === 'rent' && ' per month'}
          <br />
          {type.charAt(0).toUpperCase() + type.slice(1)} • {bedrooms} bedrooms
          <br />
          {location}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/property/${id}`} className="btn btn-outline-primary">
            View Details
          </Link>
          <FavoriteButton propertyId={id} />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;