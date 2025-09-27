import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TextImageSection from '../components/TextImageSection';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import About from '../components/About';
import TextonomialSection from '../components/TextonomialSection';
import ImageSlider2 from '../components/ImageSlider2';
import PracticalSection from '../components/practicalSection';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={styles.page}
    >
      <Navbar />
      <Hero />
      <TextImageSection reverse={false} isVideo={true} />
      <ImageSlider />
      <TextonomialSection />
      <PracticalSection reverse={true} isVideo={true} />
      <ImageSlider2 />
      <About />
      <Footer />
    </motion.div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
  },
};

export default Home;