import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/siteData';
import './Portfolio.css';

const CATEGORIES = [
  { key: 'all',         label: 'All Work' },
  { key: 'wedding',     label: 'Ceremony' },
  { key: 'pre-wedding', label: 'Pre-Wedding' },
  { key: 'reception',   label: 'Reception' },
  { key: 'candid',      label: 'Candid' },
];

/* Fallback images so the page renders without real data */
const FALLBACK = [
  { id: 1,  src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=900', title: 'A Quiet Ceremony',    category: 'wedding',     placeholder: '' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900', title: 'The First Look',      category: 'pre-wedding', placeholder: '' },
  { id: 3,  src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=900', title: 'Golden Details',      category: 'wedding',     placeholder: '' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=900', title: 'Vow Exchange',        category: 'ceremony',    placeholder: '' },
  { id: 5,  src: 'https://images.unsplash.com/photo-1521543832500-49e69fb00a3a?q=80&w=900', title: 'Stolen Glance',       category: 'candid',      placeholder: '' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=900', title: 'The Dance Floor',     category: 'reception',   placeholder: '' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900', title: 'Evening Light',       category: 'reception',   placeholder: '' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900', title: 'Bridal Portraits',    category: 'pre-wedding', placeholder: '' },
  { id: 9,  src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=900', title: 'Unscripted Joy',      category: 'candid',      placeholder: '' },
];

export default function Portfolio() {
  const [active, setActive]   = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const [loaded, setLoaded]   = useState({});
  const [lbClosing, setLbClosing] = useState(false);
  const gridRef = useRef(null);

  const items = (portfolioItems?.length > 0 ? portfolioItems : FALLBACK);
  const filtered = active === 'all' ? items : items.filter((i) => i.category === active);

  /* ── Close lightbox with exit animation ── */
  const closeLightbox = useCallback(() => {
    setLbClosing(true);
    setTimeout(() => { setLightbox(null); setLbClosing(false); }, 280);
  }, []);

  /* ── Keyboard nav ── */
  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowRight')  setLightbox((p) => (p + 1) % filtered.length);
      if (e.key === 'ArrowLeft')   setLightbox((p) => (p - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, filtered.length, closeLightbox]);

  /* ── Scroll reveal for grid items ── */
  useEffect(() => {
    const els = document.querySelectorAll('.p-item');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  /* ── Body scroll lock when lightbox open ── */
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const handleError = (e, item) => { if (item.placeholder) e.target.src = item.placeholder; };

  return (
    <div className="pf-wrapper">

      {/* ═══ HERO ═══ */}
      <header className="pf-hero">
        <div className="pf-hero-bg" aria-hidden="true" />
        <div className="pf-hero-content">
          <p className="pf-eyebrow">
            <span className="pf-eyebrow-dash" />
            Apex Photo Club
          </p>
          <h1 className="pf-hero-title">
            <span className="pf-title-line pf-title-sm">The</span>
            <span className="pf-title-line pf-title-lg">Archives</span>
          </h1>
          <p className="pf-hero-sub">
            Every frame tells a story. A curated collection of<br />
            cherished moments across India and the world.
          </p>
        </div>
        <div className="pf-hero-count" aria-label={`${items.length} photographs`}>
          <span className="pf-count-num">{items.length}</span>
          <span className="pf-count-label">Photographs</span>
        </div>
      </header>

      {/* ═══ FILTERS ═══ */}
      <nav className="pf-filters" aria-label="Filter by category">
        <div className="pf-filters-inner">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.key}
              className={`pf-filter ${active === cat.key ? 'is-active' : ''}`}
              onClick={() => setActive(cat.key)}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              {cat.label}
              {active === cat.key && <span className="pf-filter-dot" />}
            </button>
          ))}
          <span className="pf-filter-count">{filtered.length} images</span>
        </div>
      </nav>

      {/* ═══ GRID ═══ */}
      <main className="pf-container" ref={gridRef}>
        <div className="pf-grid">
          {filtered.map((item, idx) => {
            /* Give every 7th item (0-indexed: 3rd in a row of 3) a tall span for rhythm */
            const isTall = idx % 7 === 2;
            return (
              <div
                key={item.id}
                className={`p-item ${isTall ? 'p-item--tall' : ''}`}
                onClick={() => setLightbox(idx)}
                style={{ transitionDelay: `${(idx % 9) * 0.06}s` }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.title}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(idx)}
              >
                {!loaded[item.id] && <div className="p-skeleton" aria-hidden="true" />}
                <img
                  src={item.src}
                  alt={item.title}
                  onError={(e) => handleError(e, item)}
                  onLoad={() => setLoaded((p) => ({ ...p, [item.id]: true }))}
                  loading="lazy"
                  style={{ opacity: loaded[item.id] ? 1 : 0 }}
                />
                <div className="p-overlay">
                  <div className="p-overlay-inner">
                    <span className="p-cat">{item.category}</span>
                    <h3 className="p-title">{item.title}</h3>
                    <span className="p-view-label">
                      View
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* ═══ LIGHTBOX ═══ */}
      {lightbox !== null && (
        <div
          className={`lb-backdrop ${lbClosing ? 'is-closing' : ''}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="lb-modal" onClick={(e) => e.stopPropagation()}>

            {/* Progress bar */}
            <div className="lb-progress" aria-hidden="true">
              <div
                className="lb-progress-fill"
                style={{ width: `${((lightbox + 1) / filtered.length) * 100}%` }}
              />
            </div>

            {/* Close */}
            <button className="lb-close" onClick={closeLightbox} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Prev */}
            <button
              className="lb-nav lb-prev"
              onClick={() => setLightbox((p) => (p - 1 + filtered.length) % filtered.length)}
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Image */}
            <div className="lb-img-wrapper">
              <img
                key={filtered[lightbox].src}
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                className="lb-img"
                onError={(e) => handleError(e, filtered[lightbox])}
              />
            </div>

            {/* Next */}
            <button
              className="lb-nav lb-next"
              onClick={() => setLightbox((p) => (p + 1) % filtered.length)}
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Caption */}
            <div className="lb-caption">
              <div className="lb-caption-left">
                <span className="lb-cat">{filtered[lightbox].category}</span>
                <h3 className="lb-title">{filtered[lightbox].title}</h3>
              </div>
              <span className="lb-counter">
                {String(lightbox + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
              </span>
            </div>

          </div>
        </div>
      )}

      {/* ═══ CTA ═══ */}
      <section className="pf-cta">
        <div className="pf-cta-inner">
          <span className="pf-eyebrow" style={{ justifyContent: 'center' }}>Begin Here</span>
          <h2 className="pf-cta-title">
            Love what you see?<br />
            Let's capture <em>your</em> story.
          </h2>
          <div className="pf-cta-actions">
            <Link to="/contact" className="pf-btn-primary">
              <span>Book a Session</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/packages" className="pf-btn-ghost">View Packages</Link>
          </div>
        </div>
      </section>

    </div>
  );
}