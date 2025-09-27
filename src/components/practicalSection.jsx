import React, { useRef, useState } from 'react';
import '../styles/components/TextImageSection.css';
import RegisterModal from './RegisterModal';

const PracticalSection = ({ reverse = false, isVideo = false }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <section 
        className="section" 
        style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
      >
        <div className="text-container">
          <h2 className="section-title">مهارات عمليه</h2>
          <p className="section-text">
            التعليم الحقيقي بيبدأ لما الطفل يطبّق اللي بيتعلمه بإيده. عشان كده وفرنا أنشطة عملية وتجارب تفاعلية تساعده يكتسب مهارات حقيقية تنمّي ثقته بنفسه، وتخليه يكتشف قدراته
          </p>
        </div>
        
        <div className="media-container">
          {isVideo ? (
            <div className="video-wrapper">
              <video
                ref={videoRef}
                className="about-video" 
                loop
                playsInline
                controls={isPlaying}
                poster="/images/skills.png"
              >
                <source src="/videos/skills.mp4" type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو.
              </video>

              {!isPlaying && (
                <button className="play-button" onClick={handlePlay}>
                  ▶
                </button>
              )}
            </div>
          ) : (
            <img 
              src="https://via.placeholder.com/500x300/10B981/FFFFFF?text=Content+Image" 
              alt="Content" 
              className="media"
            />
          )}
        </div>
      </section>

      {/* Register Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PracticalSection;
