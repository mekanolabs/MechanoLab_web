import React, { useRef, useState } from 'react';
import '../styles/components/TextImageSection.css';
import RegisterModal from './RegisterModal';

const TextonomialSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <section className="section testimonial-section" style={{ flexDirection: 'row' }}>
        {/* Text on the left */}
        <div className="text-container">
          <h2 className="section-title">الناس بتقول إيه عننا؟</h2>
          <p className="section-text">
            أهالي كتير مبسوطين من المكان! الأولاد بقي عندهم شغف يتعلموا حاجات جديدة زي البرمجة، الإلكترونيات، والأنشطة العملية. الجو هنا ممتع و المدربين دايمًا بيشجعوا الأطفال على الإبداع وتطوير مهاراتهم بثقة.
          </p>
        </div>

        {/* Video on the right */}
        <div className="media-container">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="media about-video"
              loop
              playsInline
              controls={isPlaying}
              poster="/images/poster2.png"
            >
              <source src="/videos/video3.mp4" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>

            {!isPlaying && (
              <button className="play-button" onClick={handlePlay}>
                ▶
              </button>
            )}
          </div>
        </div>
      </section>


    </>
  );
};

export default TextonomialSection;
