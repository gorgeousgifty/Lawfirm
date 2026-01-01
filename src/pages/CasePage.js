import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bannerImage from '../Case1.jpg'; // add a full-width banner image for the page
import articleImage1 from '../003.jpg';
import articleImage2 from '../004.jpg';
import articleImage3 from '../006.jpg';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CasePage = () => {
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
          Case Studies
        </h1>
      </div>

        {/* Case Studies Section */}
        <section style={{ backgroundColor: '#fdf7f0', padding: '4rem 5%' }}>
        <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold" style={{ color: '#5c4033' }}>Case Studies</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '750px', lineHeight: '1.8' }}>
            A glimpse into the transformative impact of our legal strategies. We bring results that protect our clients’ interests and shape industry benchmarks.
            </p>
        </div>

        {[
            {
            title: 'Landmark Corporate Restructuring for Ghanaian Conglomerate',
            image: articleImage1,
            description: 'Edwards and Co. advised a major Ghanaian manufacturing group on restructuring its corporate holdings to streamline operations and reduce liability. The process involved negotiating with multiple stakeholders, revising governance structures, and achieving tax efficiency while ensuring full compliance with Ghanaian commercial law.',
            },
            {
            title: 'Victory in Cross-Border Intellectual Property Dispute',
            image: articleImage2,
            description: 'Our legal team successfully represented a regional tech startup in a high-stakes trademark infringement case against an international corporation. We secured an injunction and favorable damages, reinforcing the importance of protecting IP rights in cross-border transactions.',
            },
            {
            title: 'Real Estate Arbitration for High-Net-Worth Clients',
            image: articleImage3,
            description: 'Representing a consortium of investors, we secured a favorable arbitration award in a multimillion-dollar dispute related to a luxury development project in East Legon, Accra. Our case preparation and negotiation acumen prevented project delays and preserved client capital.',
            }
        ].map((caseItem, idx) => (
            <div className="row align-items-center mb-5" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
            <div className={`col-md-6 ${idx % 2 === 1 ? 'order-md-2' : ''}`}>
                <img
                src={caseItem.image}
                alt={caseItem.title}
                className="img-fluid rounded shadow"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </div>
            <div className={`col-md-6 mt-4 mt-md-0 ${idx % 2 === 1 ? 'order-md-1' : ''}`}>
                <h4 className="fw-semibold mb-3" style={{ color: '#5c4033' }}>{caseItem.title}</h4>
                <p style={{ lineHeight: '1.7', color: '#3e2f1c' }}>{caseItem.description}</p>
                <a href="#" style={{ color: '#8B5E3C', fontWeight: 500, textDecoration: 'underline' }}>Read full case</a>
            </div>
            </div>
        ))}
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

export default CasePage;
