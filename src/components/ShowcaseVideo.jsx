import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import videoSrc from "../assets/video.mp4";
import "./ShowcaseVideo.css";

export default function ShowcaseVideo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // start unmuted as requested
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayOverlay, setShowPlayOverlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Attempt to play (unmuted)
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                  setShowPlayOverlay(false);
                })
                .catch((error) => {
                  console.warn("Browser blocked unmuted autoplay:", error);
                  // The user requested NO fallback to muted autoplay.
                  // Therefore, if the browser blocks the sound, the video simply will not play
                  // until the user manually clicks the play button.
                  setIsPlaying(false);
                  setShowPlayOverlay(true);
                });
            }
          } else {
            // Pause when out of view
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the video is visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const manualPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play();
      setIsPlaying(true);
      setShowPlayOverlay(false);
    }
  };

  return (
    <section className="showcase-video section-pad" aria-label="Cinematic Showcase">
      <div className="container showcase-video__grid">
        <div className="showcase-video__content reveal">
          <span className="section-label">Premium Quality</span>
          <h2 className="section-title">
            Experience the <span className="text-gradient">Difference</span>
          </h2>
          <p className="section-desc">
            See why thousands of women have switched to Nature Care Organic. 
            Experience true comfort and protection in motion.
          </p>
        </div>

        <div className="showcase-video__wrapper reveal reveal-delay-1">
          <video
            ref={videoRef}
            className="showcase-video__player"
            src={videoSrc}
            muted={isMuted}
            loop
            playsInline
            onClick={toggleMute}
          />
          
          {/* Mute/Unmute Toggle */}
          <button 
            className={`showcase-video__mute-btn ${showPlayOverlay ? 'hidden' : ''} ${isMuted && isPlaying ? 'suggest-unmute' : ''}`}
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          {/* Fallback Play Overlay if browser blocks autoplay */}
          {showPlayOverlay && (
            <div className="showcase-video__overlay" onClick={manualPlay}>
              <button className="showcase-video__play-btn" aria-label="Play video">
                <Play size={40} fill="currentColor" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
