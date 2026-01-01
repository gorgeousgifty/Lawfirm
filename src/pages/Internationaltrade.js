import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bannerImage from '../International1.jpg'; // Use a strong dark-themed image
// import GlobeSection from '../components/GlobeSection'; // adjust path as needed



const Internationaltrade = () => {
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

      {/* Hero Banner */}
      <header
        className="d-flex align-items-center justify-content-center text-center px-4"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          position: 'relative',
          color: '#fff'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3rem', fontWeight: 600 }}>
            International Trade
          </h1>
          <p className="lead mt-2" style={{ fontFamily: 'Open Sans', maxWidth: '700px', margin: '0 auto' }}>
            Bridging borders with legal clarity, regulatory strength, and trade confidence.
          </p>
        </div>
      </header>

      {/* Overview */}
      <section style={{ backgroundColor: '#fef9f5', padding: '5rem 8%', textAlign: 'center' }}>
        <div data-aos="fade-up">
          <h2 className="mb-4" style={{ fontFamily: 'Playfair Display', color: '#5c4033' }}>
            Navigating Complex Global Commerce
          </h2>
          <p style={{
            fontFamily: 'Open Sans',
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: '#3e2f1c',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            International trade demands more than business knowledge — it requires regulatory foresight, diplomatic precision, and airtight documentation.
            At Edwards and Co., we advise exporters, importers, and cross-border investors on compliance, dispute resolution, foreign investment, anti-dumping regulations, WTO matters, and trade finance.
            <br /><br />
            With trusted international networks and deep legal insight, we ensure that borders don’t become barriers.
          </p>
        </div>
      </section>

      {/* Icon Section - Services */}
      <section style={{ backgroundColor: '#f8f1e7', padding: '4rem 6%' }}>
        <div className="row text-center justify-content-center gy-5">
          {[
            {
              icon: 'bi-truck-front-fill',
              title: 'Customs & Logistics',
              desc: 'Legal assistance with customs clearance, inspections, bonded warehousing, and trade routing.'
            },
            {
              icon: 'bi-globe2',
              title: 'Cross-Border Regulations',
              desc: 'Guidance on import/export laws, trade restrictions, and regional agreements across jurisdictions.'
            },
            {
              icon: 'bi-bank',
              title: 'Dispute Resolution & Arbitration',
              desc: 'Expert arbitration under ICC, LCIA, and UNCITRAL rules for international commercial disputes.'
            },
            {
              icon: 'bi-shield-check',
              title: 'Trade Compliance Advisory',
              desc: 'Risk mitigation, licensing, sanctions screening, and ongoing regulatory strategy.'
            }
          ].map((item, idx) => (
            <div className="col-md-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(5px)',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease'
              }}>
                <div className="mb-3">
                  <i className={`bi ${item.icon}`} style={{ fontSize: '2rem', color: '#8B5E3C' }}></i>
                </div>
                <h6 className="fw-bold mb-2" style={{ fontFamily: 'Playfair Display', color: '#5c4033' }}>
                  {item.title}
                </h6>
                <p className="small" style={{ fontFamily: 'Open Sans' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trade Map Section */}
      <section style={{ backgroundColor: '#fff4e8', padding: '4rem 2rem' }}>
        <div className="container text-center" data-aos="fade-up">
          <h3 style={{ fontFamily: 'Playfair Display', color: '#5c4033' }}>
            Our Strategic Trade Corridors
          </h3>
          <p style={{ fontFamily: 'Open Sans', maxWidth: '800px', margin: '0 auto' }}>
            From Africa to Asia, the EU to the Middle East — we support trade across diverse legal landscapes.
          </p>

          {/* <GlobeSection /> */}


          {/* <div className="mt-4">
            <iframe
            title="Edwards and Co. Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.061357576408!2d31.223444415113577!3d30.044419681880125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584106e4d63a41%3A0x19df1746cf11be99!2sZamalek%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1658691541291!5m2!1sen!2seg"
            width="100%"
            height="450"
            style={{ border: 'none', borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            />
          </div> */}
        </div>
      </section>

            {/* Search box */}
      <div className="bg-light py-2 d-none" id="search-box">
        <div className="container d-flex justify-content-center">
          <input type="text" className="form-control w-50" placeholder="Search..." />
        </div>
      </div>

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
export default Internationaltrade;
