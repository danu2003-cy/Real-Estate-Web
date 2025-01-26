import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-4">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="KeyFinder Logo" style={{ height: '60px', marginRight: '10px' }} />
            KeyFinder
          </Link>

          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/for-sale">Buy</Link>
            <Link className="nav-link" to="/to-rent">Rent</Link>
            <Link className="nav-link" to="/house-prices">House Prices</Link>
            <Link className="nav-link" to="/find-agent">Find Agent</Link>
            <Link className="nav-link" to="/favorites">Favorites</Link>
            <button className="btn btn-outline-primary ms-3" onClick={toggleModal}>Sign in</button>
          </div>
        </div>
      </nav>

      {/* Sign-In Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign In</h5>
                <button type="button" className="btn-close" onClick={toggleModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Sign In</button>
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
