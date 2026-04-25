import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFAB.css';

export default function WhatsAppFAB() {
  const phoneNumber = "918602237072"; 
  const message = "Hello! I'm interested in booking Apex Photo Club for my wedding.";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="wa-fab"
      aria-label="Contact us on WhatsApp"
    >
      <div className="wa-pulse"></div>
      <FaWhatsapp className="wa-icon" />
    </a>
  );
}