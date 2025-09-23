import React from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img 
        src="/images/hero.jpeg" 
        alt="Hero" 
        className="hero-image"
      />
      <div className="hero-content">
        <h1 className="hero-title">
          Mekano Labs
          <span className="hero-subtitle-line">متعة التعلم</span>
        </h1>
        <p className="hero-subtitle">
          في Mekano Labs بنحوّل التعليم لتجربة ممتعة مليانة فضول، إبداع، ودعم.
          كل طفل عنده فرصة يكتشف نفسه ويصنع مستقبله بخطوات واثقة.
        </p>
        <div className="hero-button-container">
          {/* <button className="hero-button">ارغب في الاشتراك</button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
