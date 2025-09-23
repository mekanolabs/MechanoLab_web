import React, { useRef, useState } from 'react';
import '../styles/components/About.css';

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
        <p className="about-description">
          <strong>ميكانو لاب</strong> هي مساحة تعليمية مبتكرة بنؤمن إن التعلم الممتع هو طريق الإبداع. 
          هدفنا إننا نساعد الأطفال يكتشفوا قدراتهم ويتعلموا مهارات المستقبل بخطوات واثقة. 
          من خلال أنشطة عملية وتفاعلية، بنعرفهم على أحدث مجالات التكنولوجيا زي الإلكترونيات 
          والأنظمة المدمجة، البرمجة وتطوير التطبيقات، الذكاء الاصطناعي، وإنترنت الأشياء. 
          في ميكانو لاب بنخلي التكنولوجيا تجربة ممتعة، ونبني مع الأطفال ثقة حقيقية بنفسهم 
          علشان يكونوا جاهزين لفرص بكرة.
        </p>
        <button className="about-button">سجل الان</button>
      </div>
    </section>
  );
};

export default About;
