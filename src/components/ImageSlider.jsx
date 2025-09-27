import React, { useState, useEffect } from 'react';
import '../styles/components/ImageSlider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  const slides = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
    '/images/9.png',
    '/images/10.png',
    '/images/11.png',
    '/images/12.png',
    '/images/13.png',
    '/images/14.png',
    '/images/15.png',
    '/images/16.png',
    '/images/17.jpeg',
  ];

  // Preload all images
  useEffect(() => {
    const preloadImages = () => {
      const promises = slides.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });

      Promise.all(promises)
        .then(() => {
          setImagesPreloaded(true);
        })
        .catch((error) => {
          console.error('Error preloading images:', error);
          setImagesPreloaded(true);
        });
    };

    preloadImages();
  }, []);

  const goToNextSlide = () => {
    if (isAnimating || !imagesPreloaded) return;

    const newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setDirection('right');
    setNextSlide(newSlide);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsAnimating(false);
    }, 600);
  };

  const goToPrevSlide = () => {
    if (isAnimating || !imagesPreloaded) return;

    const newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setDirection('left');
    setNextSlide(newSlide);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsAnimating(false);
    }, 600);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!imagesPreloaded) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, imagesPreloaded]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') goToPrevSlide();
      if (e.key === 'ArrowRight') goToNextSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnimating, imagesPreloaded]);

  if (!imagesPreloaded) {
    return (
      <section className="slider-section">
        <h2 className="slider-title">فعاليات | Mekano Labs</h2>
        <div className="slider-container loading">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>جاري تحميل الصور...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="slider-section">
      <h2 className="slider-title">فعاليات | Mekano Labs</h2>
      <div className="slider-container">
        <div className="slide-container">
          {/* Current Slide - Always visible in the background */}
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="slide-image current-slide"
          />

          {/* Next/Previous Slide - Animated during transition */}
          {isAnimating && (
            <img
              src={slides[nextSlide]}
              alt={`Slide ${nextSlide + 1}`}
              className={`slide-image animated-slide slide-${direction}`}
            />
          )}

          {/* Navigation arrows */}
          <button className="arrow-button prev" onClick={goToPrevSlide}>
            <FaChevronLeft className="arrow-icon" />
          </button>

          <button className="arrow-button next" onClick={goToNextSlide}>
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
              if (!isAnimating && index !== currentSlide && imagesPreloaded) {
                const newDirection = index > currentSlide ? 'right' : 'left';
                setDirection(newDirection);
                setNextSlide(index);
                setIsAnimating(true);

                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsAnimating(false);
                }, 600);
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;