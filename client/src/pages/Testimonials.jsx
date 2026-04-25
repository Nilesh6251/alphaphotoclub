import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/siteData';
import './Testimonials.css';

function CounterStat({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="tstat" ref={ref}>
      <span className="tstat-num gold-text">{count}{suffix}</span>
      <span className="tstat-label">{label}</span>
    </div>
  );
}

export default function Testimonials() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <div className="page-hero">
        <span className="section-badge">✦ Reviews</span>
        <h1 className="section-title">What Our <span className="gold-text">Clients Say</span></h1>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Real stories from real couples who trusted us to capture their most precious moments.
        </p>
        <div className="gold-line" />
      </div>

      <div className="container">
        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="testimonial-card glass-card reveal"
              style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
            >
              <div className="tc-stars">
                {'⭐'.repeat(t.stars)}
              </div>
              <blockquote className="tc-text">{t.text}</blockquote>
              <div className="tc-footer">
                <div className="tc-avatar">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="tc-author">{t.author}</div>
                  <div className="tc-location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <section className="stats-banner reveal">
          <div className="stats-banner-inner">
            <h2 className="section-title">Join <span className="gold-text">100+</span> Happy Couples</h2>
            <div className="stats-row">
              <CounterStat target={100} suffix="+" label="Weddings Captured" />
              <div className="stats-divider" />
              <CounterStat target={5} suffix="★" label="Average Rating" />
              <div className="stats-divider" />
              <CounterStat target={100} suffix="+" label="Happy Clients" />
              <div className="stats-divider" />
              <CounterStat target={5} suffix="+" label="Years Experience" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="testi-cta reveal">
          <div className="testi-cta-inner">
            <h3>Ready to Be Our Next Success Story?</h3>
            <p>Book your session today and let us capture your timeless moments.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn-primary">Book Your Session</Link>
              <Link to="/packages" className="btn-outline">View Packages</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
