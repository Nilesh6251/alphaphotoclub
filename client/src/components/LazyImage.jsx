import React, { useState, useEffect, useRef } from 'react';

export default function LazyImage({ src, alt, className, style, onLoad, onError }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;
    
    // Fallback for missing IntersectionObserver
    if (!window.IntersectionObserver) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      { rootMargin: '200px' } // Load slightly before it comes into view
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`lazy-img-wrapper ${className || ''}`}
      style={{
        ...style,
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        background: 'linear-gradient(90deg, var(--ink-2, #1a1a1a) 25%, rgba(255,255,255,0.02) 50%, var(--ink-2, #1a1a1a) 75%)',
        backgroundSize: '200% 100%',
        animation: !isLoaded ? 'shimmer 1.5s infinite' : 'none',
        height: style?.height || '100%', // default to 100% but can be overridden
        ...style
      }}
    >
      {isIntersecting && (
        <img
          src={src}
          alt={alt || ''}
          onLoad={(e) => {
            setIsLoaded(true);
            if (onLoad) onLoad(e);
          }}
          onError={onError}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            display: 'block'
          }}
        />
      )}
    </div>
  );
}
