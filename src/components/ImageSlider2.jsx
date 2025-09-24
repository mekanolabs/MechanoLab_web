import React from "react";
import "../styles/components/ImageSlider2.css";

const ImageSlider2 = () => {
  const slides = [
    "/images2/1.png",
    "/images2/2.png",
    "/images2/3.png",
    "/images2/4.png",
    "/images2/5.png",
    "/images2/6.png",
    "/images2/7.png",
    "/images2/8.png",
    "/images2/9.png",
    "/images2/10.png",
    "/images2/11.png",
    "/images2/12.png",
    "/images2/13.png",
  ];

  // Duplicate array for smooth infinite loop
  const duplicatedSlides = [...slides, ...slides];

  return (
    <section className="infinite-slider">
      <div className="slider-track">
        {duplicatedSlides.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider2;
