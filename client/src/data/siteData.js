// =============================================
// APEX PHOTO CLUB — Site Content Data
// =============================================

import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import img4 from './images/image20 (2).jpg';
import img5 from './images/image5.jpg';
import img6 from './images/image6.jpg';
import img7 from './images/image7.jpg';
import img8 from './images/image8.jpg';
import img9 from './images/image9.jpg';
import img10 from './images/image10.jpg';
import img11 from './images/image11.jpg';
import img12 from './images/image12.jpg';
import img13 from './images/image13.jpg';
import img14 from './images/image14.jpg';
import img16 from './images/image16.jpg';
import img17 from './images/image17.jpg';
import img18 from './images/image18.jpg';
import img19 from './images/image19.jpg';
import img21 from './images/image21.jpg';
import img22 from './images/imagee22.jpg';
import img23 from './images/image23.jpeg';
import img24 from './images/image24.jpeg';
import img25 from './images/image25.jpeg';
import img26 from './images/image26.jpeg';
import img27 from './images/image27.jpeg';
import img28 from './images/image28.jpeg';
import img29 from './images/image29.jpeg';
import img30 from './images/image30.jpeg';
import img31 from './images/image31.jpeg';
import img32 from './images/image32.jpg';
import img33 from './images/image33.jpg';
import img34 from './images/image34.jpg';
import img35 from './images/image35.jpg';
import img36 from './images/image36.jpg';
import img37 from './images/image37.jpg';
import img38 from './images/image38.jpg';
import img39 from './images/image39.jpg';
import img40 from './images/image40.jpg';
import img41 from './images/image41.jpg';

const galleryItems = [
  { id: 1, src: img10, title: 'Golden Hour', category: 'pre-wedding', placeholder: '' },
  { id: 2, src: img11, title: 'First Look', category: 'pre-wedding', placeholder: '' },
  { id: 3, src: img12, title: 'Promise', category: 'pre-wedding', placeholder: '' },
  { id: 4, src: img17, title: 'Evening Glow', category: 'pre-wedding', placeholder: '' },
  { id: 5, src: img18, title: 'Forever Begins', category: 'pre-wedding', placeholder: '' },
  { id: 6, src: img19, title: 'Together', category: 'pre-wedding', placeholder: '' },
  { id: 7, src: img21, title: 'Soft Light', category: 'pre-wedding', placeholder: '' },
  { id: 8, src: img22, title: 'Engagement Glow', category: 'pre-wedding', placeholder: '' },
  { id: 9, src: img23, title: 'Vow Preview', category: 'pre-wedding', placeholder: '' },
  { id: 10, src: img24, title: 'Golden Walk', category: 'pre-wedding', placeholder: '' },
];

export const portfolioGroups = {
  all: [
    { id: 1, src: img4, title: 'Golden Hour', category: 'pre-wedding' },
    { id: 2, src: img14, title: 'Classic Portrait', category: 'reception' },
    { id: 3, src: img23, title: 'Vow Preview', category: 'pre-wedding' },
    { id: 4, src: img41, title: 'Last Light', category: 'pre-wedding' },
    { id: 5, src: img21, title: 'Soft Light', category: 'candid' },
    { id: 6, src: img40, title: 'Forever Starts', category: 'candid' },
    { id: 7, src: img22, title: 'Engagement Glow', category: 'pre-wedding' },
    { id: 8, src: img19, title: 'Together', category: 'pre-wedding' },
    { id: 9, src: img3, title: 'Garden ', category: 'wedding' },
    { id: 10, src: img1, title: 'Eternal Love', category: 'wedding' },
  ],
  wedding: [
    { id: 11, src: img33, title: 'Closing In', category: 'wedding' },
    { id: 12, src: img37, title: 'Warm Embrace', category: 'wedding' },
    { id: 13, src: img34, title: 'The Pose', category: 'wedding' },
    { id: 14, src: img38, title: 'Shared Moment', category: 'wedding' },
    { id: 15, src: img39, title: 'Wedding Glow', category: 'wedding' },
    { id: 16, src: img36, title: 'Togetherness', category: 'wedding' },
    { id: 17, src: img32, title: 'Captured Smile', category: 'wedding' },
  ],
  'pre-wedding': [
    { id: 18, src: img17, title: 'Evening Glow', category: 'pre-wedding' },
    { id: 19, src: img22, title: 'Engagement Glow', category: 'pre-wedding' },
    { id: 20, src: img18, title: 'Forever Begins', category: 'pre-wedding' },
    { id: 21, src: img31, title: 'Quiet Joy', category: 'pre-wedding' },
    { id: 22, src: img13, title: 'Floral Promise', category: 'pre-wedding' },
    { id: 23, src: img28, title: 'Promise in Motion', category: 'pre-wedding' },
    { id: 24, src: img10, title: 'Golden Hour', category: 'pre-wedding' },
    { id: 25, src: img12, title: 'Promise', category: 'pre-wedding' },
    { id: 26, src: img11, title: 'First Look', category: 'pre-wedding' },
  ],
  candid: [
    { id: 27, src: img35, title: 'Portrait Edit', category: 'candid' },
    { id: 28, src: img30, title: 'Sunlit Details', category: 'candid' },
    { id: 29, src: img29, title: 'Golden Frame', category: 'candid' },
    { id: 30, src: img28, title: 'Promise in Motion', category: 'candid' },
    { id: 31, src: img5, title: 'Heritage Charm', category: 'candid' },
    { id: 32, src: img21, title: 'Soft Light', category: 'candid' },
    { id: 33, src: img40, title: 'Forever Starts', category: 'candid' },
    { id: 34, src: img37, title: 'Warm Embrace', category: 'candid' },
    { id: 35, src: img36, title: 'Togetherness', category: 'candid' },
  ],
  reception: [
    { id: 36, src: img7, title: 'Garden Bliss', category: 'reception' },
    { id: 37, src: img8, title: 'Beautiful Bond', category: 'reception' },
    { id: 38, src: img9, title: 'Timeless Elegance', category: 'reception' },
    { id: 39, src: img16, title: 'Stolen Look', category: 'reception' },
    { id: 40, src: img6, title: 'Serenade', category: 'reception' },
  ],
};

export const portfolioItems = [...portfolioGroups.all, ...portfolioGroups.wedding, ...portfolioGroups['pre-wedding'], ...portfolioGroups.candid, ...portfolioGroups.reception];

export const galleryHighlights = galleryItems;

export const packages = [
  {
    id: 'silver',
    icon: '🥈',
    name: 'Silver Package',
    tagline: 'Perfect for intimate ceremonies',
    price: '₹49,000',
    popular: false,
    features: [
      '1 Traditional Photographer',
      '1 Traditional Videographer',
      'Unlimited High-Resolution Photos',
      '50 Edited Photos',
      '1 Photo Album (40 Pages)',
      'Online Gallery Link',
      'Standard Editing',
    ],
  },
  {
    id: 'gold',
    icon: '🥇',
    name: 'Gold Package',
    tagline: 'Our most loved package',
    price: '₹69,000',
    popular: true,
    features: [
      '2 Photographers (Candid + Traditional)',
      '1 Traditional Videographer',
      'Unlimited High-Resolution Photos',
      'Pre-Wedding Shoot',
      '100 Edited Photos',
      '1 Wedding Album (50 Sheets)',
      'Online Gallery Link',
    ],
  },
  {
    id: 'platinum',
    icon: '💎',
    name: 'Platinum Package',
    tagline: 'Premium luxury experience',
    price: '₹1,19,000',
    popular: false,
    features: [
      '2 Photographers (Candid + Traditional)',
      '2 Videographers (Cinematic + Traditional)',
      'Unlimited High-Resolution Photos',
      'Online Gallery Link',
      'Pre-Wedding Shoots',
      '200 Edited Digital Photos',
      '1 Wedding Album (60 Sheets)',
      '1 × 20×30 Photo Frame',
      'Custom Designed Wedding Album',
      'Drone Photo + Video',
    ],
  },
];

export const addons = [
  { icon: '📷', name: 'Engagement Shoot', price: '₹12,000', desc: '25 edited photos with all raw data — 1 hour session' },
  { icon: '🎥', name: 'Cinematic Video Add-on', price: '₹15,000', desc: 'Professional 4K video with premium editing' },
  { icon: '🚁', name: 'Drone Photography', price: '₹8,000', desc: 'Aerial shots & 4K drone footage' },
  { icon: '📸', name: 'Album Upgrade', price: '₹10,000', desc: 'Premium leather album with 20 pages' },
  { icon: '💌', name: 'Candid Photography', price: '₹12,000', desc: '1 day of candid moment capturing' },
  { icon: '🎬', name: 'Same-Day Edit Video', price: '₹15,000', desc: 'Edited video ready by evening' },
];

export const testimonials = [
  {
    id: 1,
    text: '"Apex Photo Club captured every ritual beautifully. Deven\'s attention to detail and professional approach made our wedding day even more special. The photos are simply stunning and we relive those moments every time we see them."',
    author: 'Priya & Rahul Singh',
    location: 'Indore Wedding, 2025',
    stars: 5,
  },
  {  
    id: 2,
    text: '"From pre-wedding shoots to the main event, Deven was amazing. His cinematic wedding video is something we treasured forever. The Gold Package was worth every penny. Highly recommended!"',
    author: 'Ananya & Vikram Patel',
    location: 'Bhopal Wedding, 2026',
    stars: 5,
  },
  {
    id: 3,
    text: '"Professional, punctual, and passionate about his craft. Apex Photo Club delivered premium quality photos & videos. The editing was flawless and the album is a masterpiece. Truly five-star service!"',
    author: 'Meera & Arjun Verma',
    location: 'Jabalpur Wedding, 2023',
    stars: 5,
  },
  {
    id: 4,
    text: '"We chose Apex Photo Club for our wedding and it was the best decision. The drone shots were incredible, and the cinematic video made us cry happy tears. Worth every rupee!"',
    author: 'Divya & Nikhil Sharma',
    location: 'Ujjain Wedding, 2022',
    stars: 5,
  },
  {
    id: 5,
    text: '"Deven captured the essence of our wedding perfectly. His understanding of Indian wedding photography and modern aesthetics is unmatched. The Platinum Package was everything we dreamed of!"',
    author: 'Neha & Rohan Deshmukh',
    location: 'Gwalior Wedding, 2020',
    stars: 5,
  },
  {
    id: 6,
    text: '"Best decision was hiring Apex Photo Club. The candid shots, the editing quality, the quick delivery — everything was perfect. Our parents keep watching the video repeatedly. Thank you for making our day timeless!"',
    author: 'Avni & Aman Gupta',
    location: 'Sehore Wedding, 2024',
    stars: 5,
  },
];

export const services = [
  { icon: '💑', name: 'Candid Photography' },
  { icon: '📷', name: 'Traditional Photography' },
  { icon: '🎞️', name: 'Traditional Videography' },
  { icon: '🎬', name: 'Cinematic Wedding Films' },
  { icon: '💕', name: 'Pre-Wedding Shoots' },
  { icon: '🎥', name: 'Pre-Wedding Films' },
  { icon: '🤰', name: 'Maternity Photoshoots' },
  { icon: '👗', name: 'Model Photography' },
  { icon: '📦', name: 'Product Photography' },
  { icon: '👶', name: 'Baby Photoshoots' },
];

export const contactInfo = {
  phone: '+91 88151 61755',
  phoneHref: 'tel:+918815161755',
  whatsapp: 'https://wa.me/918815161755',
  email: 'apexphotoclub1@gmail.com',
  location: ' Bhopal, Madhya Pradesh',
  availability: 'Monday – Sunday · 10:00 AM – 12:00 PM',
  instagram: 'https://www.instagram.com/apexphotoclub?igsh=MXZjMXgzaWt0ZWRvYg==',
  facebook: 'https://facebook.com/apexphotoclub',
};

export const stats = [
  { value: 100, suffix: '+', label: 'Weddings Captured' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '★', label: 'Average Rating' },
];
