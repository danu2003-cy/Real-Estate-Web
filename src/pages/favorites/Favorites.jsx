import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLikedProperties } from '../../hooks/useLikedProperties';
import { useProperties } from '../../hooks/useProperties';
import ConfirmDialog from '../../components/ConfirmDialog';
import { formatPrice } from '../../utils/propertyUtils';
import './Favorites.css';

const Favorites = () => {
  const { likedProperties, toggleLike } = useLikedProperties();
  const { properties: saleProperties } = useProperties('sale');
  const { properties: rentProperties } = useProperties('rent');
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const allProperties = [...saleProperties, ...rentProperties];
  const favoriteProperties = allProperties.filter((prop) =>
    likedProperties.includes(prop.id)
  );

  const handleRemove = (property) => {
    setSelectedProperty(property);
    setShowConfirm(true);
  };

  const confirmRemove = () => {
    if (selectedProperty) {
      toggleLike(selectedProperty.id);
    }
    setShowConfirm(false);
    setSelectedProperty(null);
  };

  if (favoriteProperties.length === 0) {
    return (
      <div className="container-fluid px-4 py-4">
        <div className='row'>
        <h1 className="section-title">Saved Properties</h1>
        <div className="row">
          {/* Alert Section */}
          <div className="col-lg-8">
            <div className="alert alert-info">
              You haven't saved any properties yet. Browse our listings and click the heart icon to save properties here.
            </div>
          </div>

          {/* Tips Section */}
          <div className="col-lg-4">
            <div className="card tips-card">
              <div className="card-body">
                <h5 className="card-title">Tips for Finding Properties</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Verify the agent or seller's authenticity.</li>
                  <li className="mb-2">✓ Compare prices in the same area.</li>
                  <li className="mb-2">✓ Check property documents thoroughly.</li>
                  <li className="mb-2">✓ Visit the property before making decisions.</li>
                  <li className="mb-2">✓ Beware of suspiciously low prices.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page w-100 px-0 py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="section-title mb-0">Saved Properties</h1>
        <span className="badge bg-primary">{favoriteProperties.length} saved</span>
      </div>

      <div className="row g-4 mx-0">
        {favoriteProperties.map((property) => (
          <div key={property.id} className="col-sm-6 col-lg-3">
            <div className="card h-100">
              <img
                src={property.mainImage}
                className="card-img-top"
                alt={property.type}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{formatPrice(property.price)}</h5>
                <p className="card-text">
                  {property.type} • {property.bedrooms} bedrooms
                  <br />
                  {property.location}
                </p>
                <div className="d-flex gap-2">
                  <Link to={`/property/${property.id}`} className="btn btn-primary flex-grow-1">
                    View Details
                  </Link>
                  <button className="btn btn-outline-danger" onClick={() => handleRemove(property)}>
                    ♥
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ConfirmDialog
        isOpen={showConfirm}
        message="Are you sure you want to remove this property from your favorites?"
        onConfirm={confirmRemove}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
};

export default Favorites;
