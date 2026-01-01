import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bannerImage from '../Legalnews1.jpg'; // add a full-width banner image for the page
import articleImage1 from '../lawyers.jpg';
import articleImage2 from '../welcome.jpg';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const LegalnewsPage = () => {
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
          Legal News
        </h1>
      </div>

        {/* Legal News Section */}
        <section style={{ backgroundColor: '#fdf7f0', padding: '4rem 5%' }}>
        <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold" style={{ color: '#5c4033' }}>Legal News</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '750px', lineHeight: '1.8' }}>
            Stay informed with the latest updates from the legal world. Our curated news keeps you up to date on regulatory changes, landmark rulings, and firm announcements.
            </p>
        </div>

        <div className="row g-4">
            {[
            {
                icon: 'gavel',
                title: 'New Ghanaian Arbitration Law Passed',
                date: 'May 14, 2025',
                description: 'Ghana’s Parliament ratifies the Arbitration Reform Act, streamlining international dispute resolution. Learn what this means for corporate clients and investors.'
            },
            {
                icon: 'briefcase',
                title: 'Commercial Licensing Reforms Enacted',
                date: 'April 30, 2025',
                description: 'The Ministry of Trade has introduced new standards to expedite company registration and foreign investment licensing.'
            },
            {
                icon: 'bank',
                title: 'Central Bank Updates Compliance Mandates',
                date: 'April 10, 2025',
                description: 'New guidelines on AML (Anti-Money Laundering) reporting have been announced. Financial institutions must comply by Q3 2025.'
            },
            {
                icon: 'shield-check',
                title: 'Edwards and Co. Expands into Alexandria',
                date: 'March 25, 2025',
                description: 'We’re proud to announce the opening of our Kumasi branch, bringing premier legal expertise to Ghana’s northern region.'
            }
            ].map((news, idx) => (
            <div key={idx} className="col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="bg-white p-4 shadow-sm rounded h-100 d-flex flex-column justify-content-between" style={{ transition: 'transform 0.3s ease' }}>
                <div>
                    <h6 className="text-muted mb-1"><i className={`bi bi-${news.icon} me-2`}></i>{news.date}</h6>
                    <h5 className="fw-bold" style={{ color: '#5c4033' }}>{news.title}</h5>
                    <p className="mb-3" style={{ lineHeight: '1.7' }}>{news.description}</p>
                </div>
                <a href="#" className="text-decoration-none" style={{ color: '#8B5E3C', fontWeight: 500 }}>Read more <i className="bi bi-chevron-right"></i></a>
                </div>
            </div>
            ))}
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
          <p className="small mb-3"><i className="bi bi-telephone"></i> +233 24 216 00877</p>
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

        <a
      href="/Contactpage"
      className="btn fw-semibold"
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '20px',
        zIndex: 998,
        backgroundColor: 'rgba(255,255,255,0.15)',
        color: '#8B5E3C',
        padding: '12px 24px',
        borderRadius: '4px',
        border: '1px solid #8B5E3C',
        backdropFilter: 'blur(6px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        textDecoration: 'none',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = '#8B5E3C';
        e.currentTarget.style.color = 'white';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
        e.currentTarget.style.color = '#8B5E3C';
      }}
    >
      Book Appointment
    </a>

      <Footer />
   </>
  );
};

export default LegalnewsPage;
