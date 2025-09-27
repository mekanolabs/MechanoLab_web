import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/About.css';
import RegisterModal from './RegisterModal';

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error('Video play error:', error));
      setIsPlaying(true);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section 
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Video on the left */}
      <motion.div className="about-media" variants={itemVariants}>
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="about-video"
            controls
            preload="metadata"
            poster="https://via.placeholder.com/500x300" // Fallback for debugging
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
          {!isPlaying && (
            <motion.button 
              className="play-button" 
              onClick={handlePlay}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ▶
              </motion.span>
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Text on the right */}
      <motion.div className="about-text" variants={itemVariants}>
        <motion.h2 
          className="about-title"
          whileInView={{ 
            backgroundPosition: ['0%', '100%', '0%'],
            transition: { duration: 3, repeat: Infinity }
          }}
          style={{
            background: 'linear-gradient(45deg, #4F46E5, #fd4800, #4F46E5)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          من نحن
        </motion.h2>

        <motion.p 
          className="about-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          احنا مساحة تعليمية مبتكرة .بنؤمن إن التعلم الممتع هو طريق الإبداع. 
          هدفنا إننا نساعد الأطفال يكتشفوا قدراتهم ويتعلموا مهارات المستقبل بخطوات واثقة. 
          من خلال أنشطة عملية وتفاعلية، بنعرفهم على أحدث مجالات التكنولوجيا زي الإلكترونيات 
          والأنظمة المدمجة، البرمجة وتطوير التطبيقات، الذكاء الاصطناعي، وإنترنت الأشياء. 
          في ميكانو لاب بنخلي التكنولوجيا تجربة ممتعة، ونبني مع الأطفال ثقة حقيقية بنفسهم 
          علشان يكونوا جاهزين لفرص بكرة
        </motion.p>
        
        <motion.button 
          className="about-button" 
          onClick={openModal}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(79, 70, 229, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          سجل الان
        </motion.button>
      </motion.div>

      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
    </motion.section>
  );
};

export default About;