import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bannerImage from '../Tax1.jpg'; // replace with a suitable banner
// import { BsCashCoin, BsBarChartLine, BsCalculator } from 'react-icons/bs';


const Taxadvisory = () => {
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

        <header
        className="d-flex justify-content-center align-items-center position-relative text-white"
        style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '70vh',
            marginTop: '-70px',
            overflow: 'hidden'
        }}
        >
        {/* Animated Background Zoom Layer */}
        <div
            style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            animation: 'zoomHero 20s ease-in-out infinite alternate'
            }}
        ></div>

        {/* Dark Overlay */}
        <div
            style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 2
            }}
        ></div>

        {/* Centered Text */}
        <div
            style={{
            zIndex: 3,
            textAlign: 'center',
            padding: '0 5%',
            }}
        >
            <h1
            className="fw-bold"
            style={{
                fontSize: '2.8rem',
                fontFamily: 'Playfair Display, serif',
                marginBottom: '1rem',
            }}
            >
            Tax Advisory
            </h1>
            <p
            style={{
                maxWidth: '700px',
                margin: '0 auto',
                fontSize: '1.1rem',
                fontFamily: 'Open Sans, sans-serif',
            }}
            >
            Strategic tax solutions for businesses and individuals navigating the complex Egyptian tax landscape.
            </p>
        </div>
        </header>


      {/* Tax Advisory Section */}
<section style={{ backgroundColor: '#fdf7f0', padding: '4rem 2rem' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600', color: '#5c4033' }}>
        Tax Advisory Services
      </h2>
      <p className="lead" style={{ fontFamily: 'Open Sans, sans-serif', color: '#3e2f1c' }}>
        Navigate the complexities of tax regulations with confidence.
      </p>
    </div>

    <div className="row gy-5">
      <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="d-flex align-items-start gap-3">
          <i className="bi bi-cash-coin fs-1 text-warning"></i>
          <div>
            <h5 className="fw-semibold" style={{ color: '#5c4033' }}>Corporate Tax Strategy</h5>
            <p style={{ color: '#3e2f1c' }}>
              We assist companies in reducing their tax burdens through proactive planning, compliance management, and strategic structuring.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="d-flex align-items-start gap-3">
          <i className="bi bi-bar-chart-line fs-1 text-success"></i>
          <div>
            <h5 className="fw-semibold" style={{ color: '#5c4033' }}>Tax Risk Management</h5>
            <p style={{ color: '#3e2f1c' }}>
              Minimize exposure and penalties with tailored risk assessments, audits, and compliance checks backed by legal precision.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="d-flex align-items-start gap-3">
          <i className="bi bi-calculator fs-1 text-primary"></i>
          <div>
            <h5 className="fw-semibold" style={{ color: '#5c4033' }}>VAT & Indirect Taxes</h5>
            <p style={{ color: '#3e2f1c' }}>
              From VAT registration to transactional planning and dispute resolution, our lawyers guide you with full regulatory alignment.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
        <div className="d-flex align-items-start gap-3">
          <i className="bi bi-bank fs-1 text-danger"></i>
          <div>
            <h5 className="fw-semibold" style={{ color: '#5c4033' }}>International Tax Support</h5>
            <p style={{ color: '#3e2f1c' }}>
              For cross-border operations, we provide international structuring advice, double-taxation relief strategies, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
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

export default Taxadvisory;
