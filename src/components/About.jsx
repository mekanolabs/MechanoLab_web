import React, { useRef, useState } from 'react';
import '../styles/components/About.css';
import RegisterModal from './RegisterModal';

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="about-section">
      {/* Video on the left */}
      <div className="about-media">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="about-video"
            controls
            preload="metadata"
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
          {!isPlaying && (
            <button className="play-button" onClick={handlePlay}>
              ▶
            </button>
          )}
        </div>
      </div>

      {/* Text on the right */}
      <div className="about-text">
        <h2 className="about-title">من نحن</h2>

        {/* Mekano Labs centered on its own line */}
        {/* <div className="mekano-center">Mekano Labs</div> */}

        <p className="about-description">
          احنا مساحة تعليمية مبتكرة .بنؤمن إن التعلم الممتع هو طريق الإبداع. 
          هدفنا إننا نساعد الأطفال يكتشفوا قدراتهم ويتعلموا مهارات المستقبل بخطوات واثقة. 
          من خلال أنشطة عملية وتفاعلية، بنعرفهم على أحدث مجالات التكنولوجيا زي الإلكترونيات 
          والأنظمة المدمجة، البرمجة وتطوير التطبيقات، الذكاء الاصطناعي، وإنترنت الأشياء. 
          في ميكانو لاب بنخلي التكنولوجيا تجربة ممتعة، ونبني مع الأطفال ثقة حقيقية بنفسهم 
          علشان يكونوا جاهزين لفرص بكرة.
        </p>
        <button className="about-button" onClick={openModal}>سجل الان</button>
      </div>

      {/* Register Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default About;
