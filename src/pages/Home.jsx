import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TextImageSection from '../components/TextImageSection';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import About from '../components/About';
import TextonomialSection from '../components/TextonomialSection';
import ImageSlider2 from '../components/ImageSlider2';

const Home = () => {
  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <TextImageSection reverse={false} isVideo={true} />
      <ImageSlider />
      <TextonomialSection />
      <ImageSlider2 />
      <About />
      <Footer />
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
  },
};

export default Home;