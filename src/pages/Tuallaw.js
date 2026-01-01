import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './IntellectualProperty.css'; // optional for scoped styles
import bannerImage from '../Intellectaul1.jpg'; // Replace with a relevant banner

const Intellectuallaw = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleSearch = () => {
    const box = document.getElementById("search-box");
    if (box) box.classList.toggle("d-none");
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

            {/* Banner */}
      <header
        className="d-flex align-items-center justify-content-center position-relative"
        style={{
          height: '60vh',
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1 }}></div>
        <h1 style={{ zIndex: 2, fontSize: '2.8rem', fontFamily: 'Playfair Display, serif' }}>
          Intellectual Property Law
        </h1>
      </header>

      {/* Main Section */}
      <section style={{ backgroundColor: '#f9f5f0', padding: '4rem 5%' }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#5c4033' }}>Protecting Innovation</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            At Edwards and Co., our Intellectual Property team safeguards your creative rights through comprehensive legal solutions for copyrights, trademarks, patents, and design protections.
          </p>
        </div>

        {/* Icon Features */}
        <div className="row text-center g-5 justify-content-center">
          <div className="col-md-3" data-aos="zoom-in">
            <i className="bi bi-shield-lock-fill fs-1 text-primary"></i>
            <h5 className="mt-3">Copyrights</h5>
            <p>Safeguarding literary, artistic, and digital works in Ghana and internationally.</p>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="100">
            <i className="bi bi-patch-check-fill fs-1 text-success"></i>
            <h5 className="mt-3">Trademarks</h5>
            <p>Protecting brands, logos, names, and identities with robust registration support.</p>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="200">
            <i className="bi bi-lightbulb-fill fs-1 text-warning"></i>
            <h5 className="mt-3">Patents</h5>
            <p>Legal protection for inventions and processes — from filing to enforcement.</p>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="300">
            <i className="bi bi-boxes fs-1 text-danger"></i>
            <h5 className="mt-3">Design Rights</h5>
            <p>Preserving unique product designs, packaging, and UI/UX features.</p>
          </div>
        </div>
      </section>

      {/* Innovation Focus */}
      <section style={{ backgroundColor: '#fff2e5', padding: '3rem 5%' }}>
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-md-6">
            <h3 style={{ fontFamily: 'Playfair Display', color: '#5c4033' }}>Innovation & Strategy</h3>
            <p>
              Our clients include tech startups, artists, fashion houses, pharmaceutical companies, and global manufacturers. We blend legal expertise with market awareness to build enduring intellectual property strategies.
            </p>
            <p>
              From licensing to litigation, our counsel protects your IP portfolio's value in an evolving legal landscape. We are relentless in our defense and strategic in execution.
            </p>
          </div>
          <div className="col-md-6 text-center">
            {/* Elegant SVG animation or 3D-styled icon */}
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/intellectual-property-7300184-5966470.png"
              alt="Intellectual Property"
              style={{ width: '80%', maxWidth: '400px' }}
            />
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

export default Intellectuallaw;
