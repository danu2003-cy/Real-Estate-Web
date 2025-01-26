import { useState, useEffect } from 'react';
import propertiesData from '../data/properties.json';

export const useProperties = (type) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const data = type === 'sale' 
        ? propertiesData.properties.forSale 
        : propertiesData.properties.forRent;
      setProperties(data);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [type]);

  return { properties, loading };
};