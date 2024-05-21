import React, { useEffect, useRef, useState } from 'react';

const VideoLoop = ({ src, className }) => {
  const videoRef = useRef(null);
  const [isRewinding, setIsRewinding] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const playBackwards = () => {
      setIsRewinding(true);
      const interval = setInterval(() => {
        if (video.currentTime > 0) {
          video.currentTime -= 0.2; // Change this value to adjust the rewind speed
        } else {
          clearInterval(interval);
          setIsRewinding(false);
          video.play();
        }
      }, 60); // Change this value to adjust the interval timing
    };

    const handleEnded = () => {
      playBackwards();
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay
      muted
      loop={false}
    />
  );
};

export default VideoLoop;
