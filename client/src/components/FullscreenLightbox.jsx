import { useEffect } from 'react';
import './FullscreenLightbox.css';

export default function FullscreenLightbox({ items = [], index, onClose, onPrevious, onNext }) {
  const activeItem = index !== null ? items[index] : null;

  useEffect(() => {
    if (index === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && onPrevious) onPrevious();
      if (event.key === 'ArrowRight' && onNext) onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index, onClose, onPrevious, onNext]);

  if (!activeItem) return null;

  return (
    <div className="fs-lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image viewer">
      <button className="fs-lightbox__close" onClick={onClose} aria-label="Close image viewer">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {onPrevious && (
        <button className="fs-lightbox__nav fs-lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); onPrevious(); }} aria-label="Previous image">
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <div className="fs-lightbox__panel" onClick={(event) => event.stopPropagation()}>
        <img className="fs-lightbox__image" src={activeItem.src} alt={activeItem.title || 'Fullscreen image'} />
        <div className="fs-lightbox__meta">
          <div>
            {activeItem.category && <span className="fs-lightbox__category">{activeItem.category}</span>}
            {activeItem.title && <h3 className="fs-lightbox__title">{activeItem.title}</h3>}
          </div>
          {items.length > 1 && (
            <span className="fs-lightbox__count">
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
          )}
        </div>
      </div>

      {onNext && (
        <button className="fs-lightbox__nav fs-lightbox__nav--next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next image">
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}