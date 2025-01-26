import React from 'react';
import PropertyCard from './PropertyCard';

const PropertySection = ({ properties }) => {
  return (
    <div className="row">
      {properties.map(property => (
        <div key={property.id} className="col-md-6 col-lg-3 mb-4">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertySection;