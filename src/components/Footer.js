import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        padding: '2rem 5%',
        fontSize: '0.9rem',
        color: '#3e2f1c',
        borderTop: '1px solid #ddd',
        background: 'transparent', // no solid background
      }}
    >
      <div
        className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center"
        style={{ rowGap: '1rem' }}
      >
        {/* Left Side - Copyright */}
        <div>
          <p className="mb-1 fw-semibold">
            © 2025 Edwards and Co. All rights reserved | Disclaimer
          </p>
        </div>

        {/* Right Side - Working Hours */}
          <p className="mb-0 text-muted">
            <strong>Our Working Hours: </strong>
            Monday – Friday | 8:30 am – 6:00 pm - Saturdays | Emergencies only - Sundays | Closed
          </p>
      </div>
    </footer>
  );
};

export default Footer;
