import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyGallery from '../../components/PropertyGallery';
import PropertyMap from '../../components/PropertyMap';
import { useProperties } from '../../hooks/useProperties';
import { formatPrice } from '../../utils/propertyUtils';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const { properties: saleProperties } = useProperties('sale');
  const { properties: rentProperties } = useProperties('rent');
  
  const allProperties = [...saleProperties, ...rentProperties];
  const property = allProperties.find(p => p.id.toString() === id);

  if (!property) {
    return (
      <div className="container-fluid px-4 py-4">
        <div className="alert alert-warning">Property not found</div>
      </div>
    );
  }

  // Mock additional images for the gallery
  const propertyImages = [
    property.mainImage,
    '/images/image.16.jpg',
    '/images/image.17.jpg',
    '/images/image.18.jpg',
    '/images/image.15.jpg',
    '/images/image.19.jpg',
    '/images/image.22.jpg',
    '/images/image.21.jpg',
    '/images/image.20.jpg',
  ];

  return (
    <div className="container-fluid content-padding py-2 ">
      <div className='row'>
        <h1 className="section-title">Proprty Details</h1>
        <div className="row">
          {/* Image Gallery and Google Map Side by Side */}
          <div className="col-md-8">
            <PropertyGallery images={propertyImages} />
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="h5 mb-3">Location</h3>
                <PropertyMap lat={property.lat} lng={property.lng} address={property.title} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="mb-3">{property.title}</h1>
          <h2 className="text-primary mb-3">
            {formatPrice(property.price)}
            {property.type === 'rent' && ' per month'}
          </h2>

          <div className="row mb-4">
            <div className="col-md-6">
              <h3 className="h5">Property Details</h3>
              <ul className="list-unstyled">
                <li><strong>Type:</strong> {property.type.charAt(0).toUpperCase() + property.type.slice(1)}</li>
                <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
                <li><strong>Location:</strong> {property.location}</li>
                <li><strong>Added:</strong> {new Date(property.dateAdded).toLocaleDateString()}</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="h5">Features</h3>
              <ul className="list-unstyled">
                <li>✓ Central Heating</li>
                <li>✓ Double Glazing</li>
                <li>✓ Garden</li>
                <li>✓ Parking</li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="h5">Description</h3>
            <p>{property.description}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="h5 mb-3">Contact Agent</h3>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
