import React from 'react';
import SearchForm from '../components/SearchForm';

const HousePrices = () => {
  return (
    <div className="container-fluid px-4 py-4">
      <h1 className="section-title">House Prices</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="h4 mb-4">Search House Prices</h2>
              <SearchForm type="prices" />
              
              <div className="mt-4">
                <h3 className="h5">Recent Sales</h3>
                <div className="table-responsive">
                <table className="table">
  <thead>
    <tr>
      <th>Address</th>
      <th>Sale Date</th>
      <th>Price</th>
      <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123 High Street, London</td>
              <td>March 2024</td>
              <td>£450,000</td>
              <td>Flat</td>
            </tr>
            <tr>
              <td>45 Park Road, London</td>
              <td>February 2024</td>
              <td>£750,000</td>
              <td>House</td>
            </tr>
            <tr>
              <td>Kandy Road, Peradeniya</td>
              <td>January 2024</td>
              <td>Rs. 25,000,000</td>
              <td>House</td>
            </tr>
            <tr>
              <td>Main Street, Colombo 07</td>
              <td>December 2023</td>
              <td>Rs. 120,000,000</td>
              <td>Mansion</td>
            </tr>
            <tr>
              <td>Sea View Road, Galle</td>
              <td>November 2023</td>
              <td>Rs. 45,000,000</td>
              <td>Villa</td>
            </tr>
            <tr>
              <td>Lake Drive, Nuwara Eliya</td>
              <td>October 2023</td>
              <td>Rs. 60,000,000</td>
              <td>Cottage</td>
            </tr>
            <tr>
              <td>Temple Road, Kandy</td>
              <td>September 2023</td>
              <td>Rs. 30,000,000</td>
              <td>Bungalow</td>
            </tr>
            <tr>
              <td>Marine Drive, Colombo 03</td>
              <td>August 2023</td>
              <td>Rs. 95,000,000</td>
              <td>Apartment</td>
            </tr>
            <tr>
              <td>Gampaha Road, Ja-Ela</td>
              <td>July 2023</td>
              <td>Rs. 15,000,000</td>
              <td>Townhouse</td>
            </tr>
            <tr>
              <td>Negombo Beach Road, Negombo</td>
              <td>June 2023</td>
              <td>Rs. 70,000,000</td>
              <td>Beach Villa</td>
            </tr>
          </tbody>
        </table>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h3 className="h5">Market Insights</h3>
              <p>Average price in London: £520,000</p>
              <p>Price change last year: +2.5%</p>
              <p>Most active area: SW1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousePrices;