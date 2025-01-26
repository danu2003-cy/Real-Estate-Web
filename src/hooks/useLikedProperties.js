import { useState, useEffect, useCallback } from 'react';

export const useLikedProperties = () => {
  const [likedProperties, setLikedProperties] = useState(() => {
    try {
      const saved = localStorage.getItem('likedProperties');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading liked properties:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('likedProperties', JSON.stringify(likedProperties));
    } catch (error) {
      console.error('Error saving liked properties:', error);
    }
  }, [likedProperties]);

  const toggleLike = useCallback((propertyId) => {
    if (!propertyId) return;
    
    setLikedProperties(prev => {
      const isLiked = prev.includes(propertyId);
      return isLiked 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId];
    });
  }, []);

  const isLiked = useCallback((propertyId) => {
    if (!propertyId) return false;
    return likedProperties.includes(propertyId);
  }, [likedProperties]);

  const removeLike = useCallback((propertyId) => {
    if (!propertyId) return;
    setLikedProperties(prev => prev.filter(id => id !== propertyId));
  }, []);

  return { 
    likedProperties, 
    toggleLike, 
    isLiked,
    removeLike
  };
};