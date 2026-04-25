import { useState } from 'react';
import { contactInfo } from '../data/siteData';
import './Contact.css';

const INITIAL_FORM = {
  name: '', phone: '', email: '', weddingDate: '', package: '', message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone
    if (!/^\d{10}$/.test(form.phone.replace(/[^0-9]/g, ''))) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setForm(INITIAL_FORM);
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.message || 'Server error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <div className="page-hero">
        <span className="section-badge">✦ Get In Touch</span>
        <h1 className="section-title">Let's Create Your <span className="gold-text">Perfect Wedding</span></h1>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Book your session today and let us turn your special day into timeless memories.
        </p>
        <div className="gold-line" />
      </div>

      <div className="container">
        <div className="contact-layout">
          {/* Left: Contact Info */}
          <aside className="contact-info-col">
            <h2>Contact <span className="gold-text">Information</span></h2>
            <p className="ci-sub">Reach out and we'll get back to you within 24 hours.</p>

            <div className="contact-items">
              <a href={contactInfo.phoneHref} className="ci-item">
                <span className="ci-icon">📞</span>
                <div>
                  <div className="ci-label">Phone</div>
                  <div className="ci-value">{contactInfo.phone}</div>
                </div>
              </a>

              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="ci-item">
                <span className="ci-icon">💬</span>
                <div>
                  <div className="ci-label">WhatsApp</div>
                  <div className="ci-value">Send a Message</div>
                </div>
              </a>

              <a href={`mailto:${contactInfo.email}`} className="ci-item">
                <span className="ci-icon">📧</span>
                <div>
                  <div className="ci-label">Email</div>
                  <div className="ci-value">{contactInfo.email}</div>
                </div>
              </a>

              <div className="ci-item">
                <span className="ci-icon">📍</span>
                <div>
                  <div className="ci-label">Location</div>
                  <div className="ci-value">{contactInfo.location}</div>
                  <div className="ci-note">Available across Madhya Pradesh & beyond</div>
                </div>
              </div>

              <div className="ci-item">
                <span className="ci-icon">⏰</span>
                <div>
                  <div className="ci-label">Availability</div>
                  <div className="ci-value">{contactInfo.availability}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-link" id="social-instagram" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="social-link" id="social-facebook" title="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </aside>

          {/* Right: Booking Form */}
          <div className="contact-form-col">
            <div className="booking-form-card">
              <h3>Booking <span className="gold-text">Inquiry</span></h3>
              <p className="form-sub">Fill in your details and we'll contact you within 24 hours.</p>

              <form id="bookingForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text" id="name" name="name"
                      placeholder="Enter your full name"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel" id="phone" name="phone"
                      placeholder="10-digit mobile number"
                      value={form.phone} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email" id="email" name="email"
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="weddingDate">Wedding Date *</label>
                    <input
                      type="date" id="weddingDate" name="weddingDate"
                      value={form.weddingDate} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="package">Package Interest *</label>
                  <select id="package" name="package" value={form.package} onChange={handleChange} required>
                    <option value="">— Select a Package —</option>
                    <option value="Silver">Silver Package (₹49,000)</option>
                    <option value="Gold">Gold Package (₹69,000)</option>
                    <option value="Platinum">Platinum Package (₹1,19,000)</option>
                    <option value="Custom">Custom / Unsure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us Your Vision *</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Describe your wedding vision, preferences, or any special requests..."
                    value={form.message} onChange={handleChange} required
                    style={{ minHeight: '130px' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary submit-btn"
                  disabled={status === 'loading'}
                  id="submit-inquiry-btn"
                >
                  {status === 'loading' ? (
                    <><span className="spinner" /> Sending...</>
                  ) : (
                    <>Send Inquiry →</>
                  )}
                </button>
              </form>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="form-message success">
                  ✅ <strong>Thank you!</strong> We'll contact you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="form-message error">
                  ❌ Couldn't reach server. Please{' '}
                  <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp us
                  </a>{' '}directly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
