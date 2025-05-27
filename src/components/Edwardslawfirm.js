// src/components/Edwardslawfirm.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import lawyersImg from '../Hero1.png'; // adjust the path if needed

const Edwardslawfirm = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  const toggleSearch = () => {
    const box = document.getElementById("search-box");
    box.classList.toggle("d-none");
  };

const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const rect = footer.getBoundingClientRect();
    const isFooterInView = rect.top <= window.innerHeight && rect.bottom >= 0;

    setShowScrollTop(isFooterInView);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (

    <div style={{ backgroundColor: '#f8f1e7', color: '#3e2f1c' }}>
      {/* Navbar */}
        <nav
        className="navbar navbar-expand-lg fixed-top shadow-sm w-100"
        style={{
            background: 'rgba(154, 123, 79, 0.78)',
            backdropFilter: 'blur(6px)',
            fontSize: '0.95rem',
            padding: '0.6rem 0',
            zIndex: 1050,
        }}
        >

        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold text-white" href="/Edwardslawfirm">Edwards and Co.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-3">
            {/* Firm Dropdown */}
            <li className="nav-item dropdown">
            <Link smooth to="#about" className="nav-link dropdown-toggle">Firm</Link>
            <ul className="dropdown-menu">
              <li><HashLink smooth to="#about" className="dropdown-item">About Us</HashLink></li>
              <li><HashLink smooth to="#team" className="dropdown-item">Our Team</HashLink></li>
               <li><HashLink smooth to="/Contactpage" className="dropdown-item">Contact Us</HashLink></li>
            </ul>
            </li>

            {/* Expertise Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="expertiseDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Expertise
              </a>
              <ul className="dropdown-menu" aria-labelledby="expertiseDropdown">
                <li><HashLink smooth to="/#practice" className="dropdown-item">Practice Areas</HashLink></li>
                <li><Link to="/corporate-advisory" className="dropdown-item">Corporate Advisory</Link></li>
                <li><Link to="/litigation" className="dropdown-item">Litigation</Link></li>
              </ul>
            </li>


            {/* Work Highlights */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="workDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Work Highlights
              </a>
              <ul className="dropdown-menu" aria-labelledby="workDropdown">
                <li><Link to="/CasePage" className="dropdown-item">Case Studies</Link></li>
                <li><Link to="/SuccesPage" className="dropdown-item">Succes Studies</Link></li>
              </ul>
            </li>

            {/* Knowledge */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="knowledgeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Knowledge & Insights
              </a>
              <ul className="dropdown-menu" aria-labelledby="knowledgeDropdown">
                <li><Link to="/LegalnewsPage" className="dropdown-item">Legal News</Link></li>
                <li><HashLink smooth to="#articles" className="dropdown-item">Articles</HashLink></li>
              </ul>
            </li>

            {/* Business Services */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Business & Notary Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link to="/BusinessPage" className="dropdown-item">Business Setup</Link></li>
                <li><Link to="/DocumentPage" className="dropdown-item">Document Legalization</Link></li>
              </ul>
            </li>

            {/* Community */}
            <li className="nav-item">
                <li><Link to="/CommunityPage" className="nav-link dropdown-toggle">Community Engagement</Link></li>
            </li>
          </ul>
          </div>
          {/* Search button */}
          <div className="d-none d-lg-block ms-3">
            <button className="btn btn-link text-white" onClick={toggleSearch}>
              <i className="bi bi-search" style={{ fontSize: '1.2rem' }}></i>
            </button>
          </div>
        </div>
      </nav>



      {/* Search box hidden by default */}
      <div className="bg-light py-2 d-none" id="search-box">
        <div className="container d-flex justify-content-center">
          <input type="text" className="form-control w-50" placeholder="Search..." />
        </div>
      </div>

      {/* Hero Section */}
      <header
        className="text-white d-flex justify-content-center align-items-center zoom-hero"
        style={{
          backgroundImage: `url(${lawyersImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative',
          textAlign: 'center',
          marginTop: '-50px', // Adjust to compensate navbar height
          zIndex: 0,
        }}
      >


        <div
          style={{
            backgroundImage: `url(${lawyersImg})`,
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

        {/* Overlay */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            width: '100%',
            animation: 'zoomHero 20s ease-in-out infinite alternate'
          }}
        ></div>
        {/* <div
          style={{
            zIndex: 2,
            paddingTop: '80px',
          }}
        ></div> */}
        {/* Text */}
        <div style={{ zIndex: 3 }}>
          <h1 className="display-4 fw-bold text-white">Trusted Legal Experts in Ghana</h1>
          <p className="lead text-white">Professional. Reliable. Experienced.</p>
        </div>
      </header>



      {/* Client Testimonials */}
      <section style={{ backgroundColor: '#fdf7f0', padding: '4rem 1rem' }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-semibold" style={{ color: '#5c4033' }}>What Our Clients Say</h2>
        </div>
        <div className="row justify-content-center text-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {[
            {
              quote: "Professional, attentive, and results-driven. Highly recommended!",
              name: "Sarah M.",
              role: "Corporate Client"
            },
            {
              quote: "They helped me navigate a complex property case with ease.",
              name: "Ahmed R.",
              role: "Real Estate Investor"
            },
            {
              quote: "The team was knowledgeable and responsive throughout my divorce.",
              name: "Nadia F.",
              role: "Family Law Client"
            },
            {
              quote: "I trust Edwards and Co. for all my business legal needs.",
              name: "David T.",
              role: "Startup Founder"
            }
          ].map((t, idx) => (
            <div className="col-md-6 col-lg-3 mb-4 px-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="p-4 h-100 shadow-sm bg-white" style={{ borderRadius: '10px' }}>
                <p className="fw-medium fst-italic">"{t.quote}"</p>
                <hr />
                <p className="mb-0 fw-bold" style={{ color: '#5c4033' }}>{t.name}</p>
                <p className="text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* Welcome to Our Firm - Full Width */}
      <section style={{ backgroundColor: '#ffffff', padding: '4rem 1rem', boxShadow: '0 -1px 5px rgba(0,0,0,0.05)' }}>
        <div className="row align-items-center justify-content-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Left - Text */}
          <div className="col-md-6 px-4 mb-4 mb-md-0">
            <h2 className="mb-3 fw-semibold" style={{ color: '#5c4033' }}>Welcome to Our Firm</h2>
            <p>
              At Edwards and Co., we combine legal expertise with a deep understanding of the Egyptian legal landscape to help individuals and businesses succeed. Whether you're facing a legal challenge or seeking strategic counsel, we're here for you.
            </p>
          <Link to="/Contactpage">
            <button
              className="btn mt-3"
              style={{
                backgroundColor: '#8B5E3C',
                color: 'white',
                padding: '0.75rem 2rem',
                fontSize: '1.1rem',
                border: 'none',
                borderRadius: '30px'
              }}
            >
              Book Appointment
            </button>
          </Link>
          </div>

          {/* Right - Image */}
          <div className="col-md-6 text-center px-4">
            <img
              src={require('../sixth.jpg')} // or another image
              alt="Our Team"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '80%', height: 'auto' }}
            />
          </div>

        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" style={{ backgroundColor: '#fdf7f0', padding: '4rem 1rem' }}>
        <div className="text-center mb-5">
          <h2 className="fw-semibold" style={{ color: '#5c4033' }}>Our Practice Areas</h2>
        </div>
        <div className="row g-4 justify-content-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {[
            { title: "Corporate Law", image: "corporate.jpg", link: "/Corporatelaw" },
            { title: "Real Estate Law", image: "realestate.jpg", link: "/Realestatelaw" },
            { title: "Family Law", image: "familylaw.jpg", link: "/Familylaw" },
            { title: "Criminal Defense", image: "criminal.jpg", link: "/Criminaldefense" },
            { title: "International Trade", image: "international.jpg", link: "/Internationaltrade" },
            { title: "Intellectual Property", image: "intellectual.jpg", link: "/intellectuallaw" },
            { title: "Tax Advisory", image: "tax.jpg", link: "/Taxadvisory" },
            { title: "Employment Law", image: "employment.jpg", link: "/Employmentlaw" }
          ].map((area, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <a href={area.link} className="practice-tile d-block text-white text-decoration-none text-center"
                style={{
                  backgroundImage: `url(${require(`../${area.image}`)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                <div className="overlay"></div>
                <div className="position-absolute top-50 start-50 translate-middle fw-semibold" style={{ zIndex: 2 }}>
                  {area.title}
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section style={{ backgroundColor: '#f3e8dc', padding: '4rem 1rem' }}>
        <div className="row align-items-center justify-content-between" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Left - Text */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-semibold mb-2" style={{ color: '#5c4033' }}>Subscribe to Our Newsletters</h2>
            <p>Stay updated with our latest legal insights, firm news, and events.</p>
          </div>

          {/* Right - Form */}
          <div className="col-md-6">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="d-flex flex-column flex-sm-row gap-3"
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="58d78e00-7064-483c-8c1d-0867e8660af3" />
              <input type="hidden" name="subject" value="New Newsletter Subscriber" />
              <input type="hidden" name="redirect" value="https://www.theedwardsandco.com/ThankYouPage" />

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Johndoe@gmail.com"
                required
                style={{
                  borderRadius: '10px',
                  padding: '0.75rem 1.25rem',
                  border: '1px solid #ccc',
                  flex: '1'
                }}
              />
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: '#8B5E3C',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '0.75rem 1.5rem',
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Our Lawyers */}
      <section id="team" style={{ backgroundColor: '#fdf7f0', padding: '4rem 1rem' }}>
        <div className="text-center mb-5">
          <h2 className="fw-semibold" style={{ color: '#5c4033' }}>Meet Our Lawyers</h2>
        </div>
        <div className="row justify-content-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {[ 
            { name: 'Yvonne Smith', title: 'Senior Partner', bio: 'Specialist in corporate law with over 15 years of experience.', image: 'first.jpg' },
            { name: 'Amina El-Sayed', title: 'Criminal Defense Lawyer', bio: 'Proven success handling complex defense cases across Egypt.', image: 'second.jpg' },
            { name: 'Kenneth K. Ofori', title: 'Family Law Expert', bio: 'Helping families through sensitive cases with compassion.', image: 'third.jpg' },
            { name: 'Omar Galal', title: 'Real Estate Attorney', bio: 'Trusted for closing high-value property and land deals.', image: 'fourth.jpg' },
            { name: 'Emmanuel A. Nii', title: 'International Trade Counsel', bio: 'Advises multinationals on trade compliance and negotiations.', image: 'fifth.jpg' },
            { name: 'Nathaniel L. Agyemang', title: 'Tax Advisory Attorney', bio: 'Guides multinationals in tax strategy, trade compliance, and cross-border negotiations.', image: 'seventh.jpg' }

          ].map((lawyer, idx) => (
            <div className="col-sm-6 col-lg-4 mb-4 px-4" key={idx} data-aos="fade-up">
              <div className="card shadow h-100 border-0">
                <img
                  src={require(`../${lawyer.image}`)}
                  alt={lawyer.name}
                  className="card-img-top"
                  style={{ height: '350px', objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold" style={{ color: '#8B5E3C' }}>{lawyer.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{lawyer.title}</h6>
                  <p className="card-text">{lawyer.bio}</p>
                  <div className="mt-auto">
                    {/* <a href="#" className="btn" style={{ backgroundColor: '#8B5E3C', color: 'white', borderRadius: '5px' }}>
                      View Profile
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Insights & Articles - Enhanced Horizontal Scroll */}
        <section id="articles" style={{ backgroundColor: '#ffffff', padding: '4rem 1rem', position: 'relative' }}>
          <div className="text-center mb-4">
            <h2 className="fw-semibold" style={{ color: '#5c4033' }}>Insights & Articles</h2>
          </div>

          <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
            <Swiper
              modules={[Pagination, Autoplay, Mousewheel]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              mousewheel={{ forceToAxis: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 }
              }}
              style={{ paddingBottom: '3rem' }}
            >
              {[
                {
                  title: 'The Power of Mentorship',
                  summary: 'My internship experience at Edwards & Co. exposed me to real court sessions, client interactions, and legal drafting, fostering confidence and growth as a future legal professional.',
                  date: 'May 10, 2025'
                },
                {
                  title: 'Navigating Business Law in Ghana',
                  summary: 'Starting a business in Ghana comes with legal obligations. Learn the essentials of company registration, contract compliance, and licensing requirements from a legal expert’s perspective.',
                  date: 'April 20, 2025'
                },
                {
                  title: 'Women in Law: Amina El-Sayed’s Journey',
                  summary: 'As one of the few female senior partners in Ghana, Amina shares her story of perseverance, leadership, and her passion for mentoring young female lawyers.',
                  date: 'March 5, 2025'
                },
                {
                  title: 'Corporate Compliance Guide 2025',
                  summary: 'This article offers a comprehensive roadmap for Ghanaian corporations to remain compliant with local and international business laws, helping you avoid costly legal pitfalls.',
                  date: 'Feb 15, 2025'
                },
                {
                  title: 'Understanding Real Estate Law in Ghana',
                  summary: 'From land disputes to title verifications, get a legal overview of what to expect when investing in property in Ghana, especially in new urban developments.',
                  date: 'Jan 10, 2025'
                },
                {
                  title: 'Intellectual Property Protection Simplified',
                  summary: 'Learn how Edwards & Co. helps clients register trademarks, copyrights, and patents locally and internationally, and what IP protection means for business growth.',
                  date: 'Dec 5, 2024'
                }
                // Add more if needed
              ].map((post, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="shadow-sm p-4 h-100"
                    style={{
                      backgroundColor: '#fdf9f4',
                      border: '1px solid #eaeaea',
                      borderRadius: '8px',
                      minHeight: '280px',
                      scrollSnapAlign: 'start'
                    }}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <small className="text-muted">{post.date}</small>
                    <h5 className="fw-bold mb-2" style={{ color: '#5c4033' }}>{post.title}</h5>
                    <p style={{ fontSize: '0.95rem' }}>{post.summary}</p>
                    <a
                      href="#"
                      style={{
                        color: '#8B5E3C',
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                        transition: 'color 0.3s ease-in-out',
                        fontWeight: 500
                      }}
                      onMouseOver={e => e.currentTarget.style.color = '#3e2f1c'}
                      onMouseOut={e => e.currentTarget.style.color = '#8B5E3C'}
                    >
                      Read more
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
       </section>
      

      {/* Business & Notary Services */}
      <section style={{ backgroundColor: '#ffffff', padding: '4rem 1rem' }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-semibold" style={{ color: '#5c4033' }}>Business & Notary Services</h2>
          <p className="text-muted">Efficient, compliant, and accessible support for your business and legal documentation needs.</p>
        </div>

        <div className="row g-4 justify-content-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {[
            {
              title: "Company Registration",
              description: "End-to-end assistance in registering companies, partnerships, and NGOs in Egypt.",
              link: "#"
            },
            {
              title: "Notary Services",
              description: "We notarize legal documents for both local and international recognition.",
              link: "#"
            },
            {
              title: "Business Permits & Licensing",
              description: "Support in securing operational permits, industry-specific licenses, and renewals.",
              link: "#"
            },
            {
              title: "Contract Drafting & Review",
              description: "Drafting, vetting, and legal analysis of business and employment contracts.",
              link: "#"
            }
          ].map((service, idx) => (
            <div key={idx} className="col-sm-6 col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay={idx * 100}>
              <a href={service.link} className="d-block p-4 h-100 text-decoration-none text-dark shadow-sm bg-white"
                style={{
                  borderRadius: '10px',
                  transition: '0.3s ease',
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#f8e8d9'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}
              >
                <h5 style={{ color: '#8B5E3C' }}>{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>



     {/* About Edwards and Co. */}
    <section id="about" style={{ backgroundColor: '#fdf7f0', padding: '4rem 1rem' }}>
      <div className="row align-items-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Left: Text */}
        <div className="col-md-6 px-4 mb-4 mb-md-0" data-aos="fade-right">
          <h2 className="fw-semibold mb-3" style={{ color: '#5c4033' }}>About Edwards and Co.</h2>
          <p style={{ lineHeight: '1.7' }}>
            Established in 2020, Edwards and Co. is a full-service Ghanaian law firm with deep experience in litigation, commercial transactions, real estate, and international trade. 
            <br /><br />
            Our lawyers are trained to combine deep legal knowledge with strategic insight, ensuring our clients receive proactive and practical legal support in every matter.
            <br /><br />
            With integrity at the core of everything we do, our mission is to protect your interests while helping you grow.
          </p>
          <a href="#team" className="text-decoration-none" style={{ color: '#8B5E3C', borderBottom: '2px solid #8B5E3C', fontWeight: 'bold' }}>
            Meet Our Team →
          </a>
        </div>

        {/* Right: Image */}
        <div className="col-md-6 text-center px-4" data-aos="fade-left">
          <img
            src={require('../about.jpg')} // replace with your actual image name in src/
            alt="About Edwards and Co."
            className="img-fluid rounded shadow"
            style={{ maxWidth: '90%', height: 'auto' }}
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
            <li><a href="/Edwardslawfirm" className="text-decoration-none text-dark">Legal News</a></li>
            <li><a href="#articles" className="text-decoration-none text-dark">Published Articles</a></li>
            <li><a href="/Edwardslawfirm" className="text-decoration-none text-dark">Case Analysis</a></li>
            <li><a href="/Edwardslawfirm" className="text-decoration-none text-dark">Weekly Insights</a></li>
            <li><a href="/Edwardslawfirm" className="text-decoration-none text-dark">Regulatory Updates</a></li>
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

    <footer className="py-4 px-4 px-md-5" style={{ backgroundColor: '#f1e4d1', fontFamily: `'Open Sans', sans-serif`, fontSize: '0.95rem' }}>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6 text-md-start text-center mb-2 mb-md-0">
          <p className="mb-0 text-muted">
            © 2025 Edwards and Co. All rights reserved | <a href="#" className="text-decoration-underline text-muted">Disclaimer</a>
          </p>
        </div>
        <div className="col-md-6 text-md-end text-center">
          <p className="mb-0 text-muted">
            <strong>Our Working Hours: </strong>
            Monday – Friday | 8:30 am – 6:00 pm - Saturdays | Emergencies only - Sundays | Closed
          </p>
        </div>
      </div>
    </footer>


    {showScrollTop && (
      <button
        className="btn btn-light shadow fade-in"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 999,
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          transition: 'opacity 0.4s ease'
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    )}

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


    </div>
  );
};

export default Edwardslawfirm;
