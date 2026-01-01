import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import familyImage from '../Family1.jpg'; // Replace with a soft family-themed image

const Familylaw = () => {
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
        className="d-flex align-items-center justify-content-center text-center px-5"
        style={{
          backgroundImage: `url(${familyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          position: 'relative',
          color: '#fff',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 1
          }}
        ></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontFamily: 'Playfair Display',
            fontSize: '3rem',
            fontWeight: 600
          }}>
            Family Law
          </h1>
          <p className="lead mt-2" style={{ fontFamily: 'Open Sans', maxWidth: '600px', margin: '0 auto' }}>
            We provide compassionate, strategic legal counsel to protect your family's future.
          </p>
        </div>
      </header>

      {/* Overview Section - Centered Content */}
      <section style={{ backgroundColor: '#fdf7f0', padding: '5rem 7%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display', color: '#5c4033', marginBottom: '2rem' }}>
          Trusted Guidance Through Life's Most Personal Challenges
        </h2>
        <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: '1.8', color: '#3e2f1c', maxWidth: '900px', margin: '0 auto' }}>
          At Edwards and Co., our Family Law practice is centered on empathy and empowerment. We understand the sensitive nature of family matters and bring not only legal proficiency but emotional intelligence to every case.
          <br /><br />
          Our team advises on divorce, child custody, spousal support, property division, domestic violence protection, prenuptial agreements, and adoption. We ensure you are informed, respected, and supported at every step of the legal process.
          <br /><br />
          Whether through negotiation or litigation, we approach each case with care and precision, focusing on long-term well-being and resolution. We believe strong families build strong communities, and our mission is to help you preserve both.
        </p>
      </section>

      {/* 3D Icon Highlights - Centered */}
      <section style={{ backgroundColor: '#fffaf3', padding: '4rem 7%' }}>
        <div className="row text-center justify-content-center gy-5">
          {[
            {
              icon: 'bi-heart-fill',
              title: 'Child Custody & Guardianship',
              text: 'We advocate for arrangements that serve the best interest of the child, ensuring a stable and loving environment.'
            },
            {
              icon: 'bi-people-fill',
              title: 'Divorce & Separation',
              text: 'We handle contested and uncontested divorces with dignity, aiming for peaceful resolution while protecting your rights.'
            },
            {
              icon: 'bi-person-check-fill',
              title: 'Adoption & Surrogacy',
              text: 'Guiding families through complex adoption or surrogacy procedures with legal clarity and human warmth.'
            }
          ].map((item, idx) => (
            <div key={idx} className="col-md-4" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="p-4 h-100" style={{
                borderRadius: '12px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="mb-3">
                  <i className={`bi ${item.icon}`} style={{ fontSize: '2rem', color: '#8B5E3C' }}></i>
                </div>
                <h5 className="fw-semibold mb-2" style={{ fontFamily: 'Playfair Display', color: '#5c4033' }}>{item.title}</h5>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Centered Quote */}
      <section className="text-center py-5" style={{ backgroundColor: '#f8f1e7' }}>
        <blockquote className="blockquote mb-0 px-3">
          <p style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            fontFamily: 'Playfair Display',
            color: '#5c4033'
          }}>
            “Family law is more than law — it’s life. Let us protect yours.”
          </p>
          <footer className="blockquote-footer mt-2" style={{ fontFamily: 'Open Sans' }}>Edwards and Co.</footer>
        </blockquote>
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

export default Familylaw;
