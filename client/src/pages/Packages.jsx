import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { packages } from '../data/siteData';
import './Packages.css';

export default function Packages() {
  const observerRef = useRef(null);

  // Buttery-smooth cinematic scroll reveal
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // Fallback data
  const displayPackages = packages?.length > 0 ? packages : [
    { id: 1, name: "The Essential", price: "₹45,000", description: "Perfect for intimate gatherings and micro-weddings.", features: ["1 Photographer", "1 Cinematographer", "Traditional & Candid", "3 Min Teaser", "Digital Album"], popular: false },
    { id: 2, name: "The Cinematic", price: "₹85,000", description: "Our most sought-after collection for comprehensive coverage.", features: ["2 Photographers", "2 Cinematographers", "Drone Coverage", "Pre-Wedding Shoot", "Premium Photobook", "Cinematic Film (5-7 Min)"], popular: true },
    { id: 3, name: "The Legacy", price: "₹1,45,000", description: "The ultimate luxury storytelling experience.", features: ["Complete Team", "Multi-day Coverage", "Same Day Edit", "2 Premium Photobooks", "Full Documentary Film", "Priority Delivery"], popular: false }
  ];

  return (
    <div className="packages-page">
      
      {/* ── PAGE HERO ── */}
      <section className="packages-hero reveal">
        <span className="section-badge">✦ Investment</span>
        <h1 className="hero-title">
          Wedding <span className="gold-text">Collections</span>
        </h1>
        <p className="hero-subtitle">
          Transparent, premium curation designed to make your dream wedding storytelling accessible. Every collection is crafted with meticulous care and editorial precision.
        </p>
        <div className="hero-divider"></div>
      </section>

      {/* ── PACKAGES GRID ── */}
      <section className="packages-container">
        <div className="packages-grid">
          {displayPackages.map((pkg, idx) => (
            <div 
              key={pkg.id}
              className={`package-card reveal ${pkg.popular ? 'is-popular' : ''}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              {pkg.popular && (
                <div className="popular-badge">
                  Most Commissioned
                </div>
              )}

              <div className="package-header">
                <h3>{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <p>{pkg.description}</p>
              </div>

              <ul className="package-features">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <span className="feature-icon">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={pkg.popular ? 'btn-gold-solid' : 'btn-gold-outline w-full'}
              >
                Reserve Date
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE APEX PROMISE (WHY US) ── */}
      <section className="apex-promise">
        <div className="promise-container">
          <div className="promise-grid">
            
            <div className="promise-text reveal">
              <span className="section-badge">The Apex Promise</span>
              <h2>
                Why Couples <br className="desktop-only"/>
                <span className="gold-text">Trust Our Vision.</span>
              </h2>
              <p>
                Your wedding is a once-in-a-lifetime legacy. We treat it with the respect, artistic obsession, and meticulous attention to detail it deserves. No compromises.
              </p>
            </div>

            <div className="promise-list reveal" style={{ transitionDelay: '0.2s' }}>
              {[
                { text: '600+ cinematic stories delivered' },
                { text: 'Editorial-grade color grading' },
                { text: 'Rapid 2–3 week delivery cycle' },
                { text: 'Unlimited album revisions' },
                { text: 'Worldwide travel available' },
                { text: 'Bespoke packages upon request' },
              ].map((item, idx) => (
                <div key={idx} className="promise-item">
                  <span className="feature-icon">✦</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CUSTOM QUOTE CTA ── */}
      <section className="custom-quote-section reveal">
        <div className="custom-quote-box">
          <div className="quote-glow"></div>
          
          <h2>
            Curate Your <span className="gold-text">Bespoke</span> Collection
          </h2>
          <p>
            Every celebration is unique. Connect with us directly to design a custom package perfectly tailored to your vision, scale, and destination.
          </p>
          
          <div className="quote-actions">
            <Link to="/contact" className="btn-gold-solid">
              Get Custom Quote
            </Link>
            <a 
              href="https://wa.me/918602237072" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold-outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}