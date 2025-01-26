import React from 'react';
import { useLikedProperties } from '../hooks/useLikedProperties';

const FavoriteButton = ({ propertyId, className = '' }) => {
  const { toggleLike, isLiked } = useLikedProperties();
  const liked = isLiked(propertyId);

  return (
    <button 
      className={`btn ${liked ? 'btn-danger' : 'btn-outline-danger'} ${className}`}
      onClick={() => toggleLike(propertyId)}
      aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
    >
      {liked ? '♥' : '♡'}
    </button>
  );
};

export default FavoriteButton;