import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ toggleSearch }) => {
  return (
        <nav
        className="navbar navbar-expand-lg fixed-top shadow-sm w-100"
        style={{
            background: 'rgba(154, 123, 79, 0.85)',
            backdropFilter: 'blur(6px)',
            fontSize: '0.95rem',
            padding: '0.6rem 0',
            zIndex: 1050,
        }}
        >


      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold text-white" href="/">Edwards and Co.</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item dropdown">
              <HashLink smooth to="/#about" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Firm</HashLink>
              <ul className="dropdown-menu">
                <li><HashLink smooth to="/#about" className="dropdown-item">About Us</HashLink></li>
                <li><HashLink smooth to="/#team" className="dropdown-item">Our Team</HashLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Expertise</span>
              <ul className="dropdown-menu">
                <li><HashLink smooth to="/#practice" className="dropdown-item">Practice Areas</HashLink></li>
                <li><Link to="/corporate-advisory" className="dropdown-item">Corporate Advisory</Link></li>
                <li><Link to="/litigation" className="dropdown-item">Litigation</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Work Highlights</span>
              <ul className="dropdown-menu">
                <li><Link to="/CasePage" className="dropdown-item">Case Studies</Link></li>
                <li><Link to="/SuccesPage" className="dropdown-item">Success Stories</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Knowledge & Insights</span>
              <ul className="dropdown-menu">
                <li><Link to="/LegalNewsPage" className="dropdown-item">Legal News</Link></li>
                <li><HashLink smooth to="/#articles" className="dropdown-item">Articles</HashLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Business & Notary Services</span>
              <ul className="dropdown-menu">
                <li><Link to="/BusinessPage" className="dropdown-item">Business Setup</Link></li>
                <li><Link to="/DocumentPage" className="dropdown-item">Document Legalization</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/CommunityPage" className="nav-link">Community Engagement</Link>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-block ms-3">
          <button className="btn btn-link text-white" onClick={toggleSearch}>
            <i className="bi bi-search" style={{ fontSize: '1.2rem' }}></i>
          </button>
        </div>
      </div>

      {/* Search box hidden by default */}
      <div className="bg-light py-2 d-none" id="search-box">
        <div className="container d-flex justify-content-center">
          <input type="text" className="form-control w-50" placeholder="Search..." />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
