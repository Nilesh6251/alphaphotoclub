import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { services, galleryHighlights, testimonials, stats } from '../data/siteData';
import FullscreenLightbox from '../components/FullscreenLightbox';
import bgImg from '../data/images/image1.jpg';
import './Home.css';
import LazyImage from '../components/LazyImage';

export default function Home() {
  const observerRef = useRef(null);
  const heroRef = useRef(null);
  
  // Refs for high-frequency DOM updates
  const heroBgRef = useRef(null);
  
  const [activeService, setActiveService] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const getBentoSpan = (idx) => {
    switch (idx) {
      case 0: return 'bento-col-span-2 bento-row-span-2';
      case 1: return 'bento-col-span-1 bento-row-span-1';
      case 2: return 'bento-col-span-1 bento-row-span-2';
      case 3: return 'bento-col-span-1 bento-row-span-1';
      case 4: return 'bento-col-span-2 bento-row-span-1';
      case 5: return 'bento-col-span-2 bento-row-span-1';
      default: return 'bento-col-span-1 bento-row-span-1';
    }
  };

  const galleryItems = [
    { src: bgImg, title: 'Cinematic Wedding', category: 'Hero' },
    { src: galleryHighlights[1]?.src, title: 'Details', category: 'Manifesto' },
    ...(galleryHighlights?.length > 0 ? galleryHighlights.slice(0, 6) : []),
    { src: galleryHighlights[2]?.src, title: 'Featured Frame', category: 'CTA' },
  ].filter((item) => item?.src);

  /* ── Scroll-based parallax (Refactored for Performance) ── */
  useEffect(() => {
    const handleScroll = () => {
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  /* ── Intersection Observer for reveals ── */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      // Lowered threshold slightly to ensure it fires reliably on mobile
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll(
      '.fade-up, .fade-left, .fade-right, .clip-reveal, .scale-reveal, .char-reveal, .cta-editorial'
    );
    revealElements.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="editorial-wrapper">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="hero-editorial" ref={heroRef}>
        <div
          className="hero-image-wrapper is-revealed"
          ref={heroBgRef}
          role="button"
          tabIndex={0}
          onClick={() => setLightbox(0)}
          onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && setLightbox(0)}
          aria-label="Open hero image"
        >
          <img
            src={bgImg}
            alt="Cinematic Wedding"
            className="hero-img"
          />
          <div className="hero-vignette" />
        </div>

        <div className="hero-rule fade-left" style={{ transitionDelay: '0.1s' }} />

        <div className="hero-text-content">
          <p className="hero-eyebrow fade-up" style={{ transitionDelay: '0.3s' }}>
            <span className="eyebrow-dash" />
            Apex Photo Club
          </p>

          <h1 className="hero-display">
            <span className="clip-reveal hero-line" style={{ transitionDelay: '0.5s' }}>
              Documenting
            </span>
            <span className="clip-reveal hero-line hero-line--italic" style={{ transitionDelay: '0.65s' }}>
              the in-between
            </span>
            <span className="clip-reveal hero-line" style={{ transitionDelay: '0.8s' }}>
              moments.
            </span>
          </h1>

          <div className="hero-meta fade-up" style={{ transitionDelay: '1s' }}>
            <p className="hero-tagline">Wedding & portrait photography<br />across India &amp; the world</p>
          </div>

          <div className="hero-actions fade-up" style={{ transitionDelay: '1.1s' }}>
            <Link to="/portfolio" className="btn-editorial">
              <span>Enter Portfolio</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn-ghost">Get in Touch</Link>
          </div>
        </div>

        <div className="scroll-indicator fade-up" style={{ transitionDelay: '1.4s' }}>
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>

        <div className="hero-stats fade-up" style={{ transitionDelay: '1.2s' }}>
          {(stats?.length > 0 ? stats : []).map((s, idx) => (
            <div className="hero-stat" key={s.label || idx}>
              <span className="stat-value">{s.value}{s.suffix}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {['Weddings', '—', 'Portraits', '—', 'Editorials', '—', 'Elopements', '—', 'Families', '—', 'Weddings', '—', 'Portraits', '—', 'Editorials', '—', 'Elopements', '—', 'Families', '—'].map((word, i) => (
            <span key={i} className={word === '—' ? 'marquee-sep' : 'marquee-word'}>{word}</span>
          ))}
        </div>
      </div>

      {/* ═══════════════ MANIFESTO ═══════════════ */}
      <section className="manifesto-section">
        <div className="container manifesto-grid">
          <div
            className="manifesto-image scale-reveal"
            role="button"
            tabIndex={0}
            onClick={() => setLightbox(1)}
            onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && setLightbox(1)}
            aria-label="Open manifesto image"
          >
            <LazyImage
              src={galleryHighlights[1]?.src}
              alt="Details"
            />
            <div className="manifesto-img-caption">
              <span>Aarav &amp; Priya, 2024</span>
            </div>
          </div>
          <div className="manifesto-text">
            <span className="eyebrow fade-up">Our Philosophy</span>
            <h2 className="manifesto-title fade-up" style={{ transitionDelay: '0.1s' }}>
              We don't just take photographs.{' '}
              <em>We preserve legacies.</em>
            </h2>
            <div className="manifesto-body">
              <p className="fade-up" style={{ transitionDelay: '0.2s' }}>
                There is a quiet poetry in a wedding day. The nervous breath before the aisle,
                the weight of a hand resting on a shoulder, the chaotic joy of the dance floor.
              </p>
              <p className="fade-up" style={{ transitionDelay: '0.3s' }}>
                Our singular focus is to document the raw, unfiltered truth of your celebration
                with an editorial eye and a cinematic soul.
              </p>
              <div className="fade-up" style={{ transitionDelay: '0.4s' }}>
                <Link to="/about" className="link-underline">
                  Read Our Story
                  <span className="link-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ GALLERY ═══════════════ */}
      <section className="editorial-gallery">
        <div className="container">
          <div className="gallery-header">
            <span className="eyebrow fade-up">The Archives</span>
            <h2 className="gallery-title fade-up" style={{ transitionDelay: '0.1s' }}>
              Curated <em>Frames</em>
            </h2>
          </div>

          <div className="bento-container">
            {(galleryHighlights?.length > 0 ? galleryHighlights : fallbackGallery).slice(0, 6).map((img, idx) => (
              <button
                key={img.id || idx}
                className={`bento-item ${getBentoSpan(idx)} fade-up`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
                onClick={() => setLightbox(idx + 2)}
                aria-label={`Open ${img.title}`}
              >
                <div className="bento-img-wrapper">
                  <LazyImage src={img.src} alt={img.title} />
                  <div className="img-overlay">
                    <span className="overlay-cta">View Story</span>
                  </div>
                </div>
                <div className="staggered-meta">
                  <span className="meta-category">{img.category}</span>
                  <h3 className="meta-title">{img.title}</h3>
                </div>
              </button>
            ))}
          </div>

          <div className="gallery-footer fade-up">
            <Link to="/portfolio" className="btn-editorial-outline">
              <span>View Complete Gallery</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="services-minimal">
        <div className="container">
          <div className="services-header">
            <span className="eyebrow fade-up">What We Offer</span>
          </div>
          <div className="bento-container" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {(services?.length > 0 ? services : fallbackServices).slice(0, 4).map((s, idx) => (
              <div className="bento-item fade-up" key={s.name || idx} style={{ transitionDelay: `${idx * 0.08}s` }}>
                <div
                  className={`service-bento-card ${activeService === idx ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveService(idx)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="service-number">0{idx + 1}</div>
                  <h3 className="service-name">{s.name}</h3>
                  <p className="service-desc">{s.description || 'Bespoke visual storytelling crafted for your unique moment.'}</p>
                  <Link to="/packages" className="service-arrow" aria-label={`Learn about ${s.name || 'our services'}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIAL ═══════════════ */}
      <section className="testimonial-section">
        <div className="container testimonial-inner">
          <span className="eyebrow fade-up">Client Words</span>
          <blockquote className="testimonial-quote fade-up" style={{ transitionDelay: '0.1s' }}>
            <p>
              "Working with Apex was the best decision of our wedding. Every image feels like
              a painting — alive with emotion we didn't even know was there."
            </p>
            <cite>
              <span className="cite-name">Meera &amp; Rohan S.</span>
              <span className="cite-context">Mumbai — Winter 2024</span>
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="cta-editorial fade-up">
        <div
          className="cta-bg"
          role="button"
          tabIndex={0}
          onClick={() => setLightbox(galleryItems.length - 1)}
          onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && setLightbox(galleryItems.length - 1)}
          aria-label="Open featured CTA image"
        >
          <img
            src={galleryHighlights[2]?.src}
            alt=""
            role="presentation"
          />
        </div>
        <div className="cta-overlay" />
        <div className="cta-content">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Begin Here</span>
          <h2 className="cta-title fade-up">
            Your story deserves<br />to be{' '}
            <em>remembered.</em>
          </h2>
          <div className="cta-actions fade-up" style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact" className="btn-editorial-light">Commission Us</Link>
            <Link to="/portfolio" className="btn-editorial-text">Explore the Work →</Link>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <FullscreenLightbox
          items={galleryItems}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrevious={() => setLightbox((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
          onNext={() => setLightbox((prev) => (prev + 1) % galleryItems.length)}
        />
      )}
    </div>
  );
}

/* ── Fallback data ── */
const fallbackGallery = [
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800', title: 'A Quiet Ceremony', category: 'Wedding' },
  { src: 'https://images.unsplash.com/photo-1521543832500-49e69fb00a3a?q=80&w=800', title: 'Golden Hour', category: 'Portrait' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800', title: 'The Details', category: 'Editorial' },
];

const fallbackServices = [
  { name: 'Wedding Films' },
  { name: 'Portrait Sessions' },
  { name: 'Destination Work' },
  { name: 'Editorial Projects' },
];