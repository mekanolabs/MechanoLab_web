import React, { useState, useEffect } from 'react';
import '../styles/components/ImageSlider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slides = [
    '/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnimating]);

  return (
    <section className="slider-section">
      <h2 className="slider-title">فعاليات | Mekano Labs </h2>
      <div className="slider-container">
        <div className="slide-container">
          <img 
            src={slides[currentSlide]} 
            alt={`Slide ${currentSlide + 1}`} 
            className="slide-image"
            style={{
              animation: isAnimating ? 'slideIn 0.5s ease-in-out' : 'none'
            }}
          />
          
          {/* Navigation arrows inside the image container */}
          <button className="arrow-button prev" onClick={prevSlide}>
            <FaChevronLeft className="arrow-icon" />
          </button>
          
          <button className="arrow-button next" onClick={nextSlide}>
            <FaChevronRight className="arrow-icon" />
          </button>
        </div>
      </div>
      
      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className="dot"
            style={{
              backgroundColor: index === currentSlide ? '#4F46E5' : '#D1D5DB',
            }}
            onClick={() => {
              if (!isAnimating && index !== currentSlide) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
          />
        ))}
      </div>

      {/* CSS Animation keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0.7;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default ImageSlider;