import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const PropertyGallery = ({ images }) => {
  const galleryImages = images.map(image => ({
    original: image, // Use the path directly from JSON
    thumbnail: image,
  }));

  return (
    <ImageGallery
      items={galleryImages}
      showPlayButton={false}
      showFullscreenButton={true}
      showNav={true}
      showThumbnails={true}
    />
  );
};

export default PropertyGallery;