import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* Brand Column */}
        <div className="footer-brand">
          <h3 className="footer-logo">Apex <span className="logo-highlight">photo club</span></h3>
          <p className="footer-bio">
            Curating timeless, cinematic memories of your most sacred celebrations. 
            Based in Madhya Pradesh, commissioned worldwide.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FiFacebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FiYoutube /></a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/portfolio">The Portfolio</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/packages">Investment</Link></li>
            <li><Link to="/testimonials">Client Stories</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact">
          <h4>Inquiries</h4>
          <ul>
            <li><FiMapPin className="icon" /> Sehore, Bhopal, MP</li>
            <li><a href="tel:+918602237072"><FiPhone className="icon" /> +91 86022 37072</a></li>
            <li><a href="mailto:apexphotoclub1@gmail.com"><FiMail className="icon" /> apexphotoclub1@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>&copy; {currentYear} Apex Photo Club. All rights reserved.</p>
          <p className="designer-credit">Designed for Excellence by Pawan Kushwaha</p>
        </div>
      </div>
    </footer>
  );
}