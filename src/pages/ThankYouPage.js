import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BsCheckCircle } from 'react-icons/bs';

const ThankYouPage = () => {
  const toggleSearch = () => {
    const box = document.getElementById("search-box");
    if (box) box.classList.toggle("d-none");
  };

  return (
    <>
      <Navbar toggleSearch={toggleSearch} />

      <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{
        minHeight: '80vh',
        backgroundColor: '#f8f1e7',
        padding: '3rem 1rem',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <BsCheckCircle size={90} color="#8B5E3C" className="mb-4" />
        <h1 className="fw-bold mb-3" style={{ color: '#5c4033' }}>Thank You!</h1>
        <p className="lead mb-4" style={{ maxWidth: '600px', color: '#5a4631' }}>
          Your message has been sent successfully. Our team will review your request and get back to you as soon as possible.
        </p>
        <Link to="/" className="btn px-4 py-2" style={{
          backgroundColor: '#8B5E3C',
          color: 'white',
          fontWeight: 600,
          borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
          Back to Homepage
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default ThankYouPage;
