import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bannerImage from '../Employment1.jpg'; // replace with a suitable banner
import { FaBalanceScale, FaUserShield, FaHandshake } from 'react-icons/fa';


const Employmentlaw = () => {
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
            Employment Law
            </h1>
            <p
            style={{
                maxWidth: '700px',
                margin: '0 auto',
                fontSize: '1.1rem',
                fontFamily: 'Open Sans, sans-serif',
            }}
            >
            Advocating for fairness, protection, and workplace justice in Egypt's ever-evolving labor landscape.
            </p>
        </div>
        </header>


      {/* Expertise Section */}
      <section className="py-5" style={{ backgroundColor: '#fdf7f0' }}>
        <div className="container px-4">
          <div className="row text-center" data-aos="fade-up">
            <div className="col-md-4 mb-4">
              <FaBalanceScale size={50} color="#8B5E3C" className="mb-3" />
              <h5 className="fw-semibold" style={{ fontFamily: 'Playfair Display' }}>Workplace Disputes</h5>
              <p style={{ fontFamily: 'Open Sans' }}>
                We handle employee-employer conflicts, contract breaches, and termination issues with precision and discretion.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <FaUserShield size={50} color="#8B5E3C" className="mb-3" />
              <h5 className="fw-semibold" style={{ fontFamily: 'Playfair Display' }}>Employee Rights</h5>
              <p style={{ fontFamily: 'Open Sans' }}>
                Protecting workers from discrimination, harassment, and wrongful dismissal under Egyptian labor law.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <FaHandshake size={50} color="#8B5E3C" className="mb-3" />
              <h5 className="fw-semibold" style={{ fontFamily: 'Playfair Display' }}>Corporate Compliance</h5>
              <p style={{ fontFamily: 'Open Sans' }}>
                Advising businesses on lawful hiring practices, compliance policies, and internal HR frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info Section */}
      <section className="py-5" style={{ backgroundColor: '#f7efe4' }}>
        <div className="container px-4" data-aos="fade-up">
          <h3 className="fw-bold mb-4" style={{ fontFamily: 'Playfair Display', color: '#5c4033' }}>
            Empowering Employment Solutions
          </h3>
          <p className="mb-3" style={{ fontSize: '1.05rem', fontFamily: 'Open Sans' }}>
            At Edwards and Co., our Employment Law practice is built on clarity and compassion. We work closely with
            individuals, unions, and corporations to uphold rights, navigate disputes, and create safe, legally compliant workplaces.
          </p>
          <p style={{ fontSize: '1.05rem', fontFamily: 'Open Sans' }}>
            From onboarding to retirement, we guide clients through Egyptian labor legislation, social insurance compliance,
            and cross-border employee contracts. With proven success in mediation, arbitration, and courtroom advocacy,
            we’re your legal partner in building stable and fair professional environments.
          </p>
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
          <p className="small mb-1"><i className="bi bi-geo-alt"></i>  Cantonments, Accra, Ghana</p>
          <p className="small mb-1"><i className="bi bi-envelope"></i>  eandepartners@gmail.com</p>
          <p className="small mb-3"><i className="bi bi-telephone"></i>  +233 24 817 0036</p>
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

export default Employmentlaw;
