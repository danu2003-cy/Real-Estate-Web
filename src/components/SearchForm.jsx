import React, { useState } from 'react';

const SearchForm = ({ type, onSearch, onReset }) => {
  const [filters, setFilters] = useState({
    propertyType: 'any',
    minPrice: '',
    maxPrice: '',
    postcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(filters);
  };

  const handleReset = () => {
    setFilters({
      propertyType: 'any',
      minPrice: '',
      maxPrice: '',
      postcode: ''
    });
    onReset?.();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form mb-4">
      <div className="row g-3">
        <div className="col-md-3">
          <select 
            name="propertyType" 
            className="form-select"
            value={filters.propertyType}
            onChange={handleChange}
          >
            <option value="any">Any Property Type</option>
            <option value="house">House</option>
            <option value="flat">Flat</option>
          </select>
        </div>

        <div className="col-md-2">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            className="form-control"
            value={filters.minPrice}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-2">
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            className="form-control"
            value={filters.maxPrice}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-3">
          <input
            type="text"
            name="postcode"
            placeholder="Postcode Area"
            className="form-control"
            value={filters.postcode}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-2 d-flex gap-2">
          <button type="submit" className="btn btn-primary flex-grow-1">
            Search
          </button>
          <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;