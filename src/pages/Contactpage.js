import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bannerImage from '../Contact1.jpg'; // add a full-width banner image for the page
import articleImage1 from '../lawyers.jpg';
import articleImage2 from '../welcome.jpg';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CorporatePage = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // ensure scroll resets
    AOS.init({ duration: 1000 });
    AOS.refresh(); // ensure animations render
    }, []);


  const toggleSearch = () => {
    const box = document.getElementById("search-box");
    if (box) {
      box.classList.toggle("d-none");
    }
  };

  return (
    <>
      <Navbar toggleSearch={toggleSearch} />

      {/* Banner */}
      {/* Banner with overlay */}
      <div style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '5%',
        animation: 'zoomHero 20s ease-in-out infinite alternate'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}></div>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#fff',
          zIndex: 2
        }}>
          Contact Us
        </h1>
      </div>

        {/* Contact Form Section - Elegant Full Width */}
        <section style={{ backgroundColor: '#fdf7f0', padding: '4rem 5%' }}>
        <div className="row justify-content-center text-start" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="col-lg-6" data-aos="fade-up">
            <h2 className="fw-bold mb-4" style={{ color: '#5c4033' }}>Book an Appointment</h2>
        <form
        action="https://api.web3forms.com/submit"
        method="POST"
        >
        {/* Web3Forms Access Key */}
        <input type="hidden" name="access_key" value="58d78e00-7064-483c-8c1d-0867e8660af3" />
        <input type="hidden" name="subject" value="New Contact Message from Website" />
        <input type="hidden" name="redirect" value="https://www.theedwardsandco.com/ThankYouPage" />

        <div className="mb-4">
            <label className="form-label" style={{ color: '#5c4033' }}>Full Name</label>
            <input
            type="text"
            name="name"
            required
            className="form-control bg-transparent border rounded-3 shadow-sm p-3"
            placeholder="Your name"
            />
        </div>

        <div className="mb-4">
            <label className="form-label" style={{ color: '#5c4033' }}>Email</label>
            <input
            type="email"
            name="email"
            required
            className="form-control bg-transparent border rounded-3 shadow-sm p-3"
            placeholder="Your email"
            />
        </div>

        <div className="mb-4">
            <label className="form-label" style={{ color: '#5c4033' }}>Phone</label>
            <input
            type="tel"
            name="phone"
            required
            className="form-control bg-transparent border rounded-3 shadow-sm p-3"
            placeholder="Phone number"
            />
        </div>

        <div className="mb-4">
            <label className="form-label" style={{ color: '#5c4033' }}>Message</label>
            <textarea
            name="message"
            required
            className="form-control bg-transparent border rounded-3 shadow-sm p-3"
            rows="4"
            placeholder="Write your message or case details..."
            ></textarea>
        </div>

        <button
            type="submit"
            className="btn px-5 py-3"
            style={{
            backgroundColor: '#8B5E3C',
            color: 'white',
            fontWeight: 600,
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease-in-out'
            }}
            onMouseEnter={e => {
            e.target.style.backgroundColor = '#6b462c';
            }}
            onMouseLeave={e => {
            e.target.style.backgroundColor = '#8B5E3C';
            }}
        >
            Send Request
        </button>
        </form>

            </div>
        </div>
        </section>


    {/* Contact Info Section - Full Width and Left Aligned */}
    <section style={{ backgroundColor: '#eaddcf', padding: '4rem 2rem 2rem 2rem', marginBottom: '0' }}>
      <div className="row justify-content-center text-start" style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div className="col-12 col-sm-6 col-md-3 mb-4" data-aos="fade-up">
          <h6 className="fw-bold mb-3" style={{ color: '#5c4033', fontSize: '1rem' }}>Expertise</h6>
          <ul className="list-unstyled small">
            <li><a href="/corporate-advisory" className="text-decoration-none text-dark">Corporate Advisory</a></li>
            <li><a href="/Realestatelaw" className="text-decoration-none text-dark">Property & Real Estate Law</a></li>
            <li><a href="/Litigation" className="text-decoration-none text-dark">Criminal Litigation</a></li>
            <li><a href="/Familylaw" className="text-decoration-none text-dark">Family & Custody Law</a></li>
            <li><a href="/Internationaltrade" className="text-decoration-none text-dark">International Arbitration</a></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="100">
          <h6 className="fw-bold mb-3" style={{ color: '#5c4033', fontSize: '1rem' }}>Knowledge & Insights</h6>
          <ul className="list-unstyled small">
            <li><a href="/" className="text-decoration-none text-dark">Legal News</a></li>
            <li><a href="/#articles" className="text-decoration-none text-dark">Published Articles</a></li>
            <li><a href="/" className="text-decoration-none text-dark">Case Analysis</a></li>
            <li><a href="/" className="text-decoration-none text-dark">Weekly Insights</a></li>
            <li><a href="/" className="text-decoration-none text-dark">Regulatory Updates</a></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="200">
          <h6 className="fw-bold mb-3" style={{ color: '#5c4033', fontSize: '1rem' }}>Other Services</h6>
          <ul className="list-unstyled small">
            <li><a href="/" className="text-decoration-none text-dark">Notary Public Services</a></li>
            <li><a href="/" className="text-decoration-none text-dark">Company Incorporation</a></li>
            <li><a href="/" className="text-decoration-none text-dark">Compliance & Licensing</a></li>
            <li><a href="/DocumentPage" className="text-decoration-none text-dark">Document Authentication</a></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
          <h6 className="fw-bold mb-3" style={{ color: '#5c4033', fontSize: '1rem' }}>Contact Us</h6>
          <p className="small mb-1"><i className="bi bi-geo-alt"></i> Cantonments, Accra, Ghana</p>
          <p className="small mb-1"><i className="bi bi-envelope"></i> eandepartners@gmail.com</p>
          <p className="small mb-3"><i className="bi bi-telephone"></i> +233 24 817 0036</p>
          <div className="d-flex gap-3">
            <a href="https://www.facebook.com/" className="text-dark"><i className="bi bi-facebook fs-6"></i></a>
            <a href="https://twitter.com/" className="text-dark"><i className="bi bi-twitter-x fs-6"></i></a>
            <a href="https://www.linkedin.com/login" className="text-dark"><i className="bi bi-linkedin fs-6"></i></a>
            <a href="https://www.instagram.com/" className="text-dark"><i className="bi bi-instagram fs-6"></i></a>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-4">
      <iframe
        title="Edwards and Co. Cantonments Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.2196445746795!2d-0.16343398438776557!3d5.567530535184195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a6f1d4db06f%3A0x682da4ebc5c449ef!2sCantonments%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1716665047639!5m2!1sen!2sgh"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '8px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
    </section>

        {/* Scroll to Top Button */}
    <button
      className="btn btn-light shadow"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999,
        borderRadius: '50%',
        width: '45px',
        height: '45px'
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="bi bi-arrow-up"></i>
    </button>

            {/* Scroll to Top Button */}
    <button
      className="btn btn-light shadow"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999,
        borderRadius: '50%',
        width: '45px',
        height: '45px'
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="bi bi-arrow-up"></i>
    </button>

      <Footer />
   </>
  );
};

export default CorporatePage;
