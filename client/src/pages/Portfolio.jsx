import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { galleryHighlights, portfolioGroups } from '../data/siteData';
import FullscreenLightbox from '../components/FullscreenLightbox';
import LazyImage from '../components/LazyImage';
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
  { id: 4,  src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=900', title: 'Vow Exchange',        category: 'wedding',     placeholder: '' },
  { id: 5,  src: 'https://images.unsplash.com/photo-1521543832500-49e69fb00a3a?q=80&w=900', title: 'Stolen Glance',       category: 'candid',      placeholder: '' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?q=80&w=900', title: 'The Dance Floor',     category: 'reception',   placeholder: '' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900', title: 'Evening Light',       category: 'reception',   placeholder: '' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900', title: 'Bridal Portraits',    category: 'pre-wedding', placeholder: '' },
  { id: 9,  src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=900', title: 'Unscripted Joy',      category: 'candid',      placeholder: '' },
  { id: 10, src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=900', title: 'Golden Hour',         category: 'pre-wedding', placeholder: '' },
];

export default function Portfolio() {
  const [active, setActive]   = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const [loaded, setLoaded]   = useState({});
  const gridRef = useRef(null);

  const items = portfolioGroups?.[active]?.length > 0 ? portfolioGroups[active] : (active === 'all' ? FALLBACK.slice(0, 10) : FALLBACK.filter((i) => i.category === active));
  const filtered = items;

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
        <div className="masonry-grid">
          {filtered.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="masonry-item p-item"
                data-category={item.category}
                onClick={() => setLightbox(idx)}
                style={{ transitionDelay: `${(idx % 9) * 0.06}s` }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.title}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(idx)}
              >
                {!loaded[item.id] && <div className="p-skeleton" aria-hidden="true" />}
                <LazyImage
                  src={item.src}
                  alt={item.title}
                  onError={(e) => handleError(e, item)}
                  onLoad={() => setLoaded((p) => ({ ...p, [item.id]: true }))}
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
        <FullscreenLightbox
          items={filtered}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrevious={() => setLightbox((p) => (p - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightbox((p) => (p + 1) % filtered.length)}
        />
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