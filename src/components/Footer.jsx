import React, { useState } from 'react';

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission
    console.log('Feedback submitted:', { email, feedback });
    setFeedback('');
    setEmail('');
  };

  return (
    <footer className="footer mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We help you find your perfect home with thousands of properties listed daily.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email: contact@keyFinder.com</p>
            <p>Phone: +94 800 123 4567</p>
            <p>Address: Sri Lanka, Colombo</p>
          </div>
          <div className="col-md-4">
            <h5>Feedback</h5>
            <form onSubmit={(e) => {
  e.preventDefault();
  const mailtoLink = `mailto:dhanushi.20230443@iit.ac.lk?subject=Website Feedback&body=Email: ${email}%0D%0AFeedback: ${feedback}`;
  window.location.href = mailtoLink;
}}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Feedback</button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 KeyFinder. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;