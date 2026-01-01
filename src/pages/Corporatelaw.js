import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import bannerImage from '../community.jpg'; // You can use a litigation-specific image here
import articleImage1 from '../lawyers.jpg';
import articleImage2 from '../welcome.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Corporatelaw = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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

            {/* Search box */}
      <div className="bg-light py-2 d-none" id="search-box">
        <div className="container d-flex justify-content-center">
          <input type="text" className="form-control w-50" placeholder="Search..." />
        </div>
      </div>

        <section className="py-5" style={{ backgroundColor: '#fdf7f0', fontFamily: "'Open Sans', sans-serif" }}>
        <div className="container-fluid px-5">
            <div className="row align-items-center mb-5" data-aos="fade-up">
            {/* Intro Text */}
            <div className="col-lg-7 pe-lg-5">
                <h2 className="fw-semibold mb-3" style={{ color: '#5c4033', fontFamily: "'Playfair Display', serif" }}>
                Corporate Law Excellence
                </h2>
                <p className="lead" style={{ color: '#3e2f1c', fontWeight: 300 }}>
                Edwards and Co. provides top-tier corporate legal counsel to businesses of all sizes. From startups to international conglomerates, we navigate the complexities of business law with precision and foresight.
                </p>
                <p style={{ color: '#3e2f1c', fontWeight: 300 }}>
                Our practice spans company formation, M&A, joint ventures, regulatory compliance, corporate governance, and risk management. We understand the legal pulse of both domestic and international commercial landscapes, delivering business-first legal strategies.
                </p>
                <p style={{ color: '#3e2f1c', fontWeight: 300 }}>
                Whether you're expanding into Ghana or optimizing your corporate structure, we are your strategic legal partners.
                </p>
            </div>

            {/* Decorative Side Element */}
            <div className="col-lg-5 text-center">
                <div style={{
                backgroundColor: '#8B5E3C',
                color: '#fff',
                padding: '3rem 2rem',
                borderRadius: '8px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                transform: 'rotate(-1deg)',
                animation: 'pulseShadow 4s ease-in-out infinite',
                fontFamily: "'Open Sans', sans-serif"
                }}>
                <h4 className="fw-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Why Choose Us?</h4>
                <ul className="list-unstyled mb-0 text-start small">
                    <li><i className="bi bi-check2 me-2"></i>Cross-border transaction specialists</li>
                    <li><i className="bi bi-check2 me-2"></i>Start-to-scale company advisory</li>
                    <li><i className="bi bi-check2 me-2"></i>Proactive compliance strategy</li>
                    <li><i className="bi bi-check2 me-2"></i>Contract review & negotiations</li>
                    <li><i className="bi bi-check2 me-2"></i>Dispute resolution support</li>
                </ul>
                </div>
            </div>
            </div>

            {/* Highlight Strip */}
            <div className="row mt-5" data-aos="fade-up">
            <div className="col-lg-10 mx-auto">
                <div style={{
                backgroundColor: '#fff8ed',
                padding: '2rem 2rem',
                borderLeft: '5px solid #8B5E3C',
                borderRadius: '4px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic'
                }}>
                <p className="mb-0" style={{ fontSize: '1.05rem', color: '#3e2f1c' }}>
                    “Our firm is trusted by Ghana’s leading corporations for its clear counsel, strategic foresight, and relentless professionalism in handling corporate law matters with confidence.”
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>


        {/* Optional: Add this to index.css for animation */}
        <style>
        {`
        @keyframes pulseShadow {
        0% { box-shadow: 0 8px 30px rgba(0,0,0,0.15); }
        50% { box-shadow: 0 12px 40px rgba(0,0,0,0.25); }
        100% { box-shadow: 0 8px 30px rgba(0,0,0,0.15); }
        }
        `}
        </style>

            {/* Contact Info Section - Full Width and Left Aligned */}
    <section style={{ backgroundColor: '#eaddcf', padding: '4rem 2rem 2rem 2rem', marginBottom: '0' }}>
      <div className="row justify-content-center text-start" style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div className="col-12 col-sm-6 col-md-3 mb-4" data-aos="fade-up">
          <h6 className="fw-bold mb-3" style={{ color: '#5c4033', fontSize: '1rem' }}>Expertise</h6>
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

        <div className="col-12 col-sm-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="200">
          <h6 className="fw-bold mb-3" style={{ color: '#5c4033', fontSize: '1rem' }}>Other Services</h6>
          <ul className="list-unstyled small">
            <li><a href="/Edwardslawfirm" className="text-decoration-none text-dark">Notary Public Services</a></li>
            <li><a href="/Edwardslawfirm" className="text-decoration-none text-dark">Company Incorporation</a></li>
            <li><a href="/Edwardslawfirm" className="text-decoration-none text-dark">Compliance & Licensing</a></li>
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

export default Corporatelaw;
