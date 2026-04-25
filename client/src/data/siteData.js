// =============================================
// APEX PHOTO CLUB — Site Content Data
// =============================================

export const galleryHighlights = [
  { id: 1, src: '/images/photo1.jpg', title: 'Eternal Love', category: 'wedding', placeholder: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80' },
  { id: 2, src: '/images/photo2.jpg', title: 'Winter Romance', category: 'pre-wedding', placeholder: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80' },
  { id: 3, src: '/images/photo3.jpg', title: 'Garden Love', category: 'wedding', placeholder: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80' },
  { id: 4, src: '/images/photo4.jpg', title: 'Golden Hour', category: 'pre-wedding', placeholder: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80' },
  { id: 5, src: '/images/photo7.jpg', title: 'Heritage Charm', category: 'reception', placeholder: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80' },
  { id: 6, src: '/images/photo11.jpg', title: 'Serenade', category: 'candid', placeholder: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80' },
  { id: 7, src: '/images/photo8.jpg', title: 'Garden Bliss', category: 'reception', placeholder: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80' },
  { id: 8, src: '/images/photo12.jpg', title: 'Beautiful Bond', category: 'candid', placeholder: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=80' },
  { id: 9, src: '/images/photo9.jpg', title: 'Timeless Elegance', category: 'wedding', placeholder: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&q=80' },
];

export const portfolioItems = [
  { id: 1, src: '/images/photo1.jpg', title: 'Sacred Vows', category: 'wedding', placeholder: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80' },
  { id: 2, src: '/images/photo2.jpg', title: 'Winter Romance', category: 'wedding', placeholder: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80' },
  { id: 3, src: '/images/photo3.jpg', title: 'Garden Ceremony', category: 'wedding', placeholder: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=80' },
  { id: 4, src: '/images/photo4.jpg', title: 'Golden Hour', category: 'pre-wedding', placeholder: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=80' },
  { id: 5, src: '/images/photo5.jpg', title: 'Mountain Escape', category: 'pre-wedding', placeholder: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=700&q=80' },
  { id: 6, src: '/images/photo6.jpg', title: 'Lakeside Dreams', category: 'pre-wedding', placeholder: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=700&q=80' },
  { id: 7, src: '/images/photo7.jpg', title: 'Heritage Charm', category: 'reception', placeholder: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=80' },
  { id: 8, src: '/images/photo8.jpg', title: 'Grand Celebration', category: 'reception', placeholder: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80' },
  { id: 9, src: '/images/photo9.jpg', title: 'Royal Evening', category: 'reception', placeholder: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=700&q=80' },
  { id: 10, src: '/images/photo10.jpg', title: 'Stolen Glance', category: 'candid', placeholder: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=700&q=80' },
  { id: 11, src: '/images/photo11.jpg', title: 'Pure Joy', category: 'candid', placeholder: 'https://images.unsplash.com/photo-1508161542028-f05b1e2dc15a?w=700&q=80' },
  { id: 12, src: '/images/photo12.jpg', title: 'Heartfelt Moment', category: 'candid', placeholder: 'https://images.unsplash.com/photo-1504714146340-959ca07e1f38?w=700&q=80' },
];

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
  location: 'Sehore, Bhopal, Madhya Pradesh',
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
