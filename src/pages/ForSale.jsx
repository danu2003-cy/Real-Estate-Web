import React from 'react';
import SearchForm from '../components/SearchForm';
import PropertySection from '../components/PropertySection';
import { useProperties } from '../hooks/useProperties';
import { useSearch } from '../hooks/useSearch';

const ForSale = () => {
  const { properties, loading } = useProperties('sale');
  const { properties: displayProperties, handleSearch, resetSearch, isSearching } = useSearch(properties);

  return (
    <div className="container-fluid px-4 py-4">
      <h1 className="section-title">Properties For Sale</h1>
      <SearchForm type="sale" onSearch={handleSearch} onReset={resetSearch} />
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {isSearching && (
            <p className="text-muted mb-4">
              Showing {displayProperties.length} search results
            </p>
          )}
          <PropertySection properties={displayProperties} />
        </>
      )}
    </div>
  );
};

export default ForSale;