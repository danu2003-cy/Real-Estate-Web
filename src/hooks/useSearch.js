import { useState, useEffect } from 'react';
import { filterProperties } from '../utils/propertyUtils';

export const useSearch = (initialProperties) => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!isSearching) {
      setFilteredProperties(initialProperties);
    }
  }, [initialProperties, isSearching]);

  const handleSearch = (filters) => {
    // Check if any filter has a value
    const hasFilters = Object.values(filters).some(value => value !== '' && value !== 'any');
    
    if (!hasFilters) {
      setIsSearching(false);
      setFilteredProperties(initialProperties);
      return;
    }

    setIsSearching(true);
    const results = filterProperties(initialProperties, filters);
    setFilteredProperties(results);
  };

  const resetSearch = () => {
    setIsSearching(false);
    setFilteredProperties(initialProperties);
  };

  return {
    properties: filteredProperties,
    handleSearch,
    resetSearch,
    isSearching
  };
};