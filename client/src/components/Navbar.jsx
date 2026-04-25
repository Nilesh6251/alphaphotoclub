import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiCamera } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Cinematic scroll effect: Navbar blurs and darkens after scrolling 50px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu gracefully on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <FiCamera className="logo-icon" />
          <span className="logo-text">Apex <span className="logo-highlight">photo club</span></span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/packages" className={`nav-link ${location.pathname === '/packages' ? 'active' : ''}`}>Investment</Link>
          <Link to="/testimonials" className={`nav-link ${location.pathname === '/testimonials' ? 'active' : ''}`}>Stories</Link>
          <Link to="/contact" className="nav-cta">Book Now</Link>
        </div>

        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/portfolio" className={`mobile-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
        <Link to="/about" className={`mobile-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link to="/packages" className={`mobile-link ${location.pathname === '/packages' ? 'active' : ''}`}>Investment</Link>
        <Link to="/testimonials" className={`mobile-link ${location.pathname === '/testimonials' ? 'active' : ''}`}>Stories</Link>
        <div className="mobile-cta">
          <Link to="/contact" className="btn-primary" style={{ width: '100%' }}>Book Your Date</Link>
        </div>
      </div>
    </nav>
  );
}