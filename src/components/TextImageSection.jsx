import React, { useRef, useState } from 'react';
import '../styles/components/TextImageSection.css';

const TextImageSection = ({ reverse = false, isVideo = false }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // اتأكد إن الصوت شغال
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section 
      className="section" 
      style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
    >
      <div className="text-container">
        <h2 className="section-title">مستقبل أفضل بخطوات واثقة</h2>
        <p className="section-text">
          في ميكانو لاب التعليم مش مجرد كتب ودروس، لكنه رحلة ممتعة مليانة اكتشاف وإبداع.
          هنا كل طفل بيلاقي الدعم والتشجيع علشان يعبّر عن نفسه بطريقته الخاصة ويصنع مستقبله بخطوات واثقة.
        </p>
        <button className="section-button">انضم الينا</button>
      </div>
      
      <div className="media-container">
        {isVideo ? (
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="media about-video"
              loop
              playsInline
              controls={isPlaying}   // controls تظهر بس بعد التشغيل
              poster="/images/poster.png"
            >
              <source src="/videos/video1.mp4" type="video/mp4" />
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
  );
};

export default TextImageSection;
