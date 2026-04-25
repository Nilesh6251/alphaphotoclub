import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  const observerRef = useRef(null);

  // Buttery-smooth scroll reveal logic
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

  return (
    <div className="about-page">
      
      {/* ── HERO SECTION ── */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2000" 
            alt="Photography Studio" 
          />
          <div className="about-hero-vignette"></div>
        </div>

        <div className="about-hero-content reveal">
          <span className="about-badge">Our Heritage</span>
          <h1 className="about-hero-title">
            The Artisans Behind <br />
            <span className="gold-text">The Lens.</span>
          </h1>
        </div>
      </section>

      {/* ── MANIFESTO & STORY SECTION ── */}
      <section className="about-manifesto">
        <div className="about-manifesto-text reveal" style={{ transitionDelay: '0.1s' }}>
          <h2>
            Redefining the <br />
            <span className="gold-text">Visual Legacy.</span>
          </h2>
          <div className="manifesto-paragraphs">
            <p>
              Apex Photo Club was born from a singular obsession: to transcend traditional wedding photography. We do not manufacture moments; we wait for them. We observe the quiet breaths, the nervous glances, and the overwhelming joy that unfolds naturally.
            </p>
            <p>
              Based in the heart of Madhya Pradesh, our studio blends the raw authenticity of photojournalism with the refined polish of fine-art editorial portraiture. 
            </p>
            <p>
              Every frame we capture is an intentional piece of art, meticulously color-graded and curated to ensure your memories feel like stills from a classic cinema masterpiece.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="about-stats-line"></div>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-num">12+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">600+</span>
                <span className="stat-label">Stories Told</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-manifesto-image reveal" style={{ transitionDelay: '0.3s' }}>
          <img 
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800" 
            alt="Editorial Wedding Photographer" 
          />
        </div>
      </section>

      {/* ── THE APPROACH (GLASSMORPHISM CARDS) ── */}
      <section className="about-approach">
        <div className="approach-header reveal">
          <span className="about-badge">Our Method</span>
          <h2>The <span className="gold-text">Apex</span> Approach</h2>
        </div>

        <div className="approach-grid">
          {[
            { title: "Unobtrusive Presence", desc: "We act as quiet observers, allowing your day to breathe naturally without forced direction or artificial staging." },
            { title: "Editorial Curation", desc: "Every image is hand-selected and meticulously color-graded to match the aesthetic of a high-end fashion publication." },
            { title: "Heirloom Quality", desc: "We deliver timeless artifacts—prints, albums, and films—designed to be passed down through generations." }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="approach-card reveal"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="approach-num">0{idx + 1}.</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA & SIGNATURE SECTION ── */}
      <section className="about-cta reveal">
        <h2>
          Ready to create <br />
          <span className="gold-text">something timeless?</span>
        </h2>
        <p>
          We take on a limited number of commissions each year to ensure every couple receives our absolute dedication.
        </p>
        
        <Link to="/contact" className="btn-gold-outline">
          Inquire Availability
        </Link>
      </section>

    </div>
  );
}