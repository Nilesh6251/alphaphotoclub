// ==================== 
// APEX PHOTO CLUB - JAVASCRIPT
// Interactive Features & Animations
// ====================

// ==================== PORTFOLIO FILTERING ====================
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Portfolio filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            galleryItems.forEach(item => {
                if (category === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('fade-in'), 10);
                } else {
                    if (item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                        setTimeout(() => item.classList.add('fade-in'), 10);
                    } else {
                        item.style.display = 'none';
                        item.classList.remove('fade-in');
                    }
                }
            });
        });
    });
});

// ==================== LIGHTBOX FUNCTIONALITY ====================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// Disable default lightbox behavior and use direct new-tab opening for gallery item clicks
// For gallery items only, open full image in new tab
const clickTargets = document.querySelectorAll('.gallery-item');
clickTargets.forEach(el => {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function(e) {
        const img = this.querySelector('img');
        if (!img || !img.src) return;

        // Avoid double open when user clicks on a native <a> link
        if (e.target.closest('a')) return;

        window.open(img.src, '_blank');
    });
});

// Hide lightbox markup if present because we're using new-tab navigation
if (lightbox) {
    lightbox.style.display = 'none';
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.gallery-item, .package-card, .testimonial-card, .about-image');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// Set initial opacity
document.querySelectorAll('.gallery-item, .package-card, .testimonial-card, .about-image').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
});

// ==================== ACTIVE NAV HIGHLIGHTING ====================
const navLinks = document.querySelectorAll('nav a');
const pages = ['index', 'portfolio', 'about', 'packages', 'testimonials', 'contact'];

function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    navLinks.forEach(link => {
        link.style.color = 'var(--white)';
        
        pages.forEach(page => {
            if (link.href.includes(page) || (page === 'index' && currentPage === '')) {
                if (currentPage === page || (currentPage === '' && link.href.includes('index'))) {
                    link.style.color = 'var(--gold)';
                }
            }
        });
    });
}

updateActiveNav();

// ==================== FORM VALIDATION ====================
// Note: Form validation and submission logic has been moved to contact.html 
// to integrate directly with Firebase Backend.

// ==================== HOVER ANIMATIONS ====================
const buttons = document.querySelectorAll('.btn, .package-card, .gallery-item, .testimonial-card');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ==================== TYPEWRITER EFFECT FOR HERO ====================
function typeWriter(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typewriter to hero heading on page load
window.addEventListener('load', function() {
    const heroHeading = document.querySelector('.hero-text h1');
    if (heroHeading) {
        const originalText = heroHeading.textContent;
        typeWriter(heroHeading, originalText, 30);
    }
});

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(counter);
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

// ==================== MOBILE MENU RESPONSIVENESS ====================
window.addEventListener('resize', function() {
    const nav = document.querySelector('nav');
    if (window.innerWidth <= 768) {
        nav.style.maxHeight = 'none';
    }
});

// ==================== ACCESSIBILITY ====================
// Add focus styles for keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-focus');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-focus');
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== BACK TO TOP BUTTON ====================
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        if (!document.querySelector('.back-to-top')) {
            const backToTop = document.createElement('a');
            backToTop.className = 'back-to-top';
            backToTop.href = '#';
            backToTop.textContent = '↑';
            backToTop.style.cssText = `
                position: fixed;
                bottom: 100px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: var(--gold);
                color: var(--primary-dark);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                font-size: 1.5rem;
                font-weight: bold;
                z-index: 998;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
            `;
            
            backToTop.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.6)';
            });
            
            backToTop.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.4)';
            });
            
            backToTop.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            document.body.appendChild(backToTop);
        }
    }
});

// ==================== 3D TILT EFFECT FOR GALLERY ====================
const tiltElements = document.querySelectorAll('[data-tilt]');

tiltElements.forEach(el => {
    el.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = ((y - centerY) / centerY) * -15; // Max tilt 15deg
        const tiltY = ((x - centerX) / centerX) * 15;
        
        this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
        this.style.transition = 'transform 0.1s linear';
    });
    
    el.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        this.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    });
});

// ==================== CONSOLE MESSAGE ====================
console.log('%cAPEX PHOTO CLUB 👑', 'color: #d4af37; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);');
console.log('%cPremium Wedding Photography Services', 'color: #d4af37; font-size: 14px;');
console.log('%cBhopal, Madhya Pradesh | Available Across India', 'color: #999; font-size: 12px;');
