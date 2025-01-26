import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const PropertyMap = ({ lat, lng, address }) => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: lat || 6.9271, // Default to Colombo if lat is missing
    lng: lng || 79.8612 // Default to Colombo if lng is missing
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCU53702oGadWtN2cGoq8PBoqBpCsBFpYI">
  <GoogleMap
    mapContainerStyle={{ height: "400px", width: "100%" }}
    zoom={15}
    center={defaultCenter}
  >
    <Marker position={defaultCenter} title={address || "Property Location"} />
  </GoogleMap>
</LoadScript>

  );
};

export default PropertyMap;