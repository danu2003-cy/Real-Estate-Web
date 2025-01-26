import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ForSale from './pages/ForSale';
import ToRent from './pages/ToRent';
import HousePrices from './pages/HousePrices';
import FindAgent from './pages/FindAgent';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PropertyDetails from './pages/propertyDetails/PropertyDetails';
import Favorites from './pages/favorites/Favorites';
import {Helmet} from 'react-helmet';

function App() {
  return (
    <Router>
      {/* Add Content Security Policy with Google Maps Fix */}
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self'; 
            script-src 'self' https://maps.googleapis.com; 
            img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com; 
            style-src 'self' 'unsafe-inline'; 
            font-src 'self'; 
            frame-src https://www.google.com https://maps.googleapis.com;
          "
        />
      </Helmet>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/for-sale" element={<ForSale />} />
            <Route path="/to-rent" element={<ToRent />} />
            <Route path="/house-prices" element={<HousePrices />} />
            <Route path="/find-agent" element={<FindAgent />} />
            <Route path="/property/:id" element={<PropertyDetails  />} />
            <Route path="/favorites" element={<Favorites   />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;