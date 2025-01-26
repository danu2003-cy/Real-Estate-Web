export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0
  }).format(price);
};

export const filterProperties = (properties, filters) => {
  return properties.filter(property => {
    if (filters.propertyType && filters.propertyType !== 'any' && 
        property.type !== filters.propertyType) return false;
    
    if (filters.minPrice && property.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) return false;
    
    if (filters.postcode && !property.location.toLowerCase()
        .includes(filters.postcode.toLowerCase())) return false;
    
    return true;
  });
};