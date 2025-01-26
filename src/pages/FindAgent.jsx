import React, { useState } from 'react';

const FindAgent = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchService, setSearchService] = useState('');
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const agents = [
    {
      name: "Sunrise Realty",
      reviews: 200,
      rating: 4.8,
      location: "Colombo, Western Province",
      service: "Sales & Lettings",
    },
    {
      name: "Lanka Property Experts",
      reviews: 150,
      rating: 4.6,
      location: "Kandy, Central Province",
      service: "Lettings",
    },
    {
      name: "Blue Ocean Realtors",
      reviews: 120,
      rating: 4.7,
      location: "Galle, Southern Province",
      service: "Sales",
    },
    {
      name: "Pearl City Properties",
      reviews: 180,
      rating: 4.9,
      location: "Negombo, Western Province",
      service: "Sales & Lettings",
    },
    {
      name: "Ceylon Homes",
      reviews: 95,
      rating: 4.4,
      location: "Jaffna, Northern Province",
      service: "Sales",
    },
    {
      name: "Emerald Property Solutions",
      reviews: 85,
      rating: 4.5,
      location: "Matara, Southern Province",
      service: "Lettings",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const results = agents.filter((agent) => {
      const locationMatch = searchLocation ? agent.location.toLowerCase().includes(searchLocation.toLowerCase()) : true;
      const serviceMatch = searchService ? agent.service.toLowerCase().includes(searchService.toLowerCase()) : true;
      return locationMatch && serviceMatch;
    });
    setFilteredAgents(results);
    setSearchPerformed(true);
  };

  const agentsToDisplay = searchPerformed ? filteredAgents : agents;

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="section-title mb-4 text-center">Find an Agent</h1>

        <div className="row mb-4">
          <div className="col-lg-8 mb-4">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSearch}>
                  <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter postcode or area"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Service Type</label>
                    <select
                      className="form-select"
                      value={searchService}
                      onChange={(e) => setSearchService(e.target.value)}
                    >
                      <option value="">Select service</option>
                      <option value="sales">Sales</option>
                      <option value="lettings">Lettings</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Find Agents
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="h5">Why Use Our Agents?</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Verified professionals</li>
                  <li className="mb-2">✓ Customer reviewed</li>
                  <li className="mb-2">✓ Local market experts</li>
                  <li className="mb-2">✓ Free valuations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card flex-grow-1">
          <div className="card-body">
            <h2 className="h4 mb-4">Top Rated Agents</h2>
            <div className="row g-4">
              {searchPerformed && filteredAgents.length === 0 && (
                <p>No agents found for the given criteria.</p>
              )}
              {agentsToDisplay.map((agent, index) => (
                <div key={index} className="col-md-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{agent.name}</h5>
                      <p className="card-text">
                        <small className="text-muted">
                          {"★".repeat(Math.floor(agent.rating))}{" "}
                          {agent.rating.toFixed(1)} ({agent.reviews} reviews)
                        </small>
                        <br />
                        {agent.location}
                        <br />
                        {agent.service}
                      </p>
                      <button className="btn btn-outline-primary w-100">
                        <a href="tel:+94761335983">Contact Agent</a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAgent;
